import express from 'express';
import { ValidationError } from 'yup';
import Mail from 'nodemailer/lib/mailer';

import { authenticate } from '../middlewares';
import { Sdk } from '../types/auth-models';
import {
  ENV_VARS,
  comparePassword,
  generateClientToken,
  hashPassword,
  getResetPasswordMail,
} from '../utils/authUtils';
import {
  emailSchema,
  loginSchema,
  resetPasswordSchema,
  clientSignupSchema,
  loginAsClientSchema,
} from '../yup-schemas';

export const getClientsRouter = (graphQLSdk: Sdk, mailTransporter: Mail) => {
  const clientsRouter = express.Router();

  clientsRouter.post('/login', async (req, res) => {
    try {
      const { email, password } = loginSchema.validateSync(req.body);
      const data = await graphQLSdk.getClientsByEmail({ email });

      const client = data.clients.shift();
      if (!client)
        return res.status(422).json({ message: 'auth.errors.emailNotFound' });

      const equal = await comparePassword(client, password);
      if (!equal)
        return res.status(422).json({ message: 'auth.errors.wrongPassword' });

      const token = generateClientToken(client);
      return res.status(200).json({ token, client });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  clientsRouter.post('/login-as-client', authenticate, async (req, res) => {
    try {
      const { clientId } = loginAsClientSchema.validateSync(req.body);
      const { clients_by_pk: client } = await graphQLSdk.getClientById({
        id: clientId,
      });

      if (
        !client ||
        (client.reseller_id !== req.userId && req.userRole !== 'admin')
      )
        return res.status(422).json({ message: 'auth.errors.wrongClientId' });

      const token = generateClientToken(client);
      return res.status(200).json({ token, client });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  clientsRouter.post('/signup', async (req, res) => {
    try {
      if (ENV_VARS.INSCRIPTIONS_LOCKED)
        return res
          .status(403)
          .json({ message: 'auth.errors.inscriptionsLocked' });

      const body = clientSignupSchema.validateSync(req.body);
      const data = await graphQLSdk.getClientsByEmail({ email: body.email });

      if (data.clients.length)
        return res
          .status(422)
          .json({ message: 'auth.errors.emailAlreadyRegistered' });

      // Remove address if everything is undefined
      const address =
        body.address &&
        !body.address.data.address &&
        !body.address.data.zipcode &&
        !body.address.data.city
          ? undefined
          : body.address;

      const client = {
        ...body,
        password: await hashPassword(body.password),
        confirmPassword: undefined,
        address,
      };
      const { insert_clients_one: newClient } = await graphQLSdk.insertClient({
        client,
      });
      if (!newClient)
        return res.status(500).json({ message: 'common.errorMsg' });

      const token = generateClientToken(newClient);
      return res.status(200).json({ token, client: newClient });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  clientsRouter.post('/forgotten-password', async (req, res) => {
    try {
      const { email } = emailSchema.validateSync(req.body);
      const data = await graphQLSdk.getClientsByEmail({ email });

      const client = data.clients.shift();
      if (!client)
        return res.status(422).json({ errors: ['auth.errors.emailNotFound'] });

      const tokenResponse = await graphQLSdk.insertClientPasswordForgottenToken(
        {
          client_id: client.id,
        },
      );
      if (!tokenResponse.insert_clients_password_forgotten_tokens_one) {
        throw new Error(
          'No data in reponse after insertClientPasswordForgottenToken',
        );
      }
      const token =
        tokenResponse.insert_clients_password_forgotten_tokens_one.id;
      const url = `${ENV_VARS.REACT_APP_ENDPOINT}/en/reset-password/?token=${token}`;

      return mailTransporter.sendMail(getResetPasswordMail(email, url), err => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json('common.emailSent');
      });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  clientsRouter.post('/reset-password', async (req, res) => {
    try {
      const { resetTokenId, password } = resetPasswordSchema.validateSync(
        req.body,
      );
      const limitDate = new Date(
        new Date().getTime() - 30 * 60000,
      ).toISOString();

      const data = await graphQLSdk.resetPassword({
        resetTokenId,
        limitDate,
        newPassword: await hashPassword(password),
      });

      const isPasswordReset = data.update_clients?.affected_rows;
      if (!isPasswordReset) {
        const isResetTokenDeleted =
          data.delete_clients_password_forgotten_tokens_by_pk?.id;
        if (!isResetTokenDeleted) {
          return res
            .status(422)
            .json({ errors: ['auth.errors.wrongResetToken'] });
        }
        return res
          .status(422)
          .json({ errors: ['auth.errors.expiredResetToken'] });
      }
      return res.status(200).json('auth.passwordReset');
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  return clientsRouter;
};

import express from 'express';
import crypto from 'crypto';
import { OAuth2Client } from 'google-auth-library';
import appleSignin from 'apple-signin-auth';
import { ValidationError } from 'yup';

import { Sdk } from '../types/auth-models';
import { UserDisplayFragment, Users } from '../types/common';

import {
  loginSchema,
  userSignupSchema,
  googleLoginSchema,
  appleLoginSchema,
  newPasswordSchema,
} from '../yup-schemas';
import {
  comparePassword,
  generateUserToken,
  hashPassword,
} from '../utils/authUtils';
import { authenticate } from '../middlewares';

const GOOGLE_CLIENT_ID =
  '908462321569-38824m21lr08kl1ogo8nq1kaamiv8h1v.apps.googleusercontent.com';
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

export const getUsersRouter = (graphQLSdk: Sdk) => {
  const usersRouter = express.Router();

  usersRouter.post('/login', async (req, res) => {
    try {
      const { email, password } = loginSchema.validateSync(req.body);
      const data = await graphQLSdk.getUsersByEmail({ email });

      const user = data.users.shift();
      if (!user)
        return res.status(422).json({ message: 'auth.errors.emailNotFound' });

      const equal = await comparePassword(user, password);
      if (!equal)
        return res.status(422).json({ message: 'auth.errors.wrongPassword' });

      const token = generateUserToken(user);
      return res.status(200).json({ token, user });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  usersRouter.post('/signup', async (req, res) => {
    try {
      const body = userSignupSchema.validateSync(req.body);
      const data = await graphQLSdk.getUsersByEmail({ email: body.email });

      if (data.users.length)
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

      const user = {
        ...body,
        password: await hashPassword(body.password),
        confirmPassword: undefined,
        address,
      };
      const { insert_users_one: newUser } = await graphQLSdk.insertUser({
        user,
      });
      if (!newUser) return res.status(500).json({ message: 'common.errorMsg' });

      const token = generateUserToken(newUser);
      return res.status(200).json({ token, user: newUser });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  usersRouter.post('/google/login', async (req, res) => {
    try {
      const { idToken } = googleLoginSchema.validateSync(req.body);
      const ticket = await googleClient.verifyIdToken({
        idToken,
        audience: GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (!payload) throw Error('no_payload');
      const { email, given_name: firstName, family_name: name } = payload;
      if (!email) throw Error('no_email');
      const data = await graphQLSdk.getUsersByEmail({ email });

      let user = data.users.shift();
      if (!user) {
        const { insert_users_one: newUser } = await graphQLSdk.insertUser({
          user: { email, first_name: firstName, name },
        });
        if (!newUser) throw Error();
        user = newUser;
      }

      const token = generateUserToken(user!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
      return res.status(200).json({ token, user });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: e.message || 'common.errorMsg' });
    }
  });

  usersRouter.post('/apple/login', async (req, res) => {
    try {
      const { idToken, nonce, firstName, name } = appleLoginSchema.validateSync(
        req.body,
      );
      const { sub: appleId, email } = await appleSignin.verifyIdToken(idToken, {
        audience: [
          'com.pac-prod.flashplay',
          'com.pac-prod.flashplay.debug',
          'com.pac-prod.flashplay.android',
        ],
        nonce: crypto.createHash('sha256').update(nonce).digest('hex'),
      });

      const usersData = await graphQLSdk.getUsersByAppleId({ appleId });

      let user:
        | (Pick<Users, 'password' | 'apple_id'> & UserDisplayFragment)
        | undefined = usersData.users.shift();
      if (!user) {
        if (!email) throw Error('Email needed to register');

        const upsertData = await graphQLSdk.upsertUser({
          user: {
            email,
            name,
            first_name: firstName,
            apple_id: appleId,
          },
        });
        if (!upsertData.insert_users_one) throw new Error();

        user = upsertData.insert_users_one;
      }

      const token = generateUserToken(user);
      return res.status(200).json({ token, user });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: e.message || 'common.errorMsg' });
    }
  });

  usersRouter.post('/new-password', authenticate, async (req, res) => {
    try {
      const body = newPasswordSchema.validateSync(req.body);

      const user = {
        password: await hashPassword(body.password),
      };

      await graphQLSdk.updateUser({
        userId: req.userId,
        user,
      });

      return res.status(200).json(null);
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  return usersRouter;
};

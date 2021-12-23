import bcrypt from 'bcrypt';
import * as yup from 'yup';
import dotenv from 'dotenv';
import jwt, { VerifyCallback } from 'jsonwebtoken';
import Mail from 'nodemailer/lib/mailer';

import { ClientsRolesEnum } from '../types/common';

export const ENV_VARS = (() => {
  dotenv.config({ path: process.env.NODE_ENV_PATH });
  const schema = yup.object({
    HASURA_GRAPHQL_ENDPOINT: yup.string().required(),
    HASURA_GRAPHQL_ADMIN_SECRET: yup.string().required(),
    HASURA_GRAPHQL_JWT_SECRET: yup.string().required(),
    SMTP_HOST: yup.string().required(),
    SMTP_PORT: yup.number().default(465),
    SMTP_SECURE: yup.boolean().default(true),
    SMTP_USERNAME: yup.string().required(),
    SMTP_PASSWORD: yup.string().required(),
    AUTH_SERVER_ENDPOINT: yup.string().default('http://localhost'),
    AUTH_SERVER_PORT: yup.number().default(3002),
    REACT_APP_ENDPOINT: yup.string().default('http://localhost:3000'),
    FILE_UPLOAD_DIR: yup.string().required(),
    INSCRIPTIONS_LOCKED: yup.boolean().default(false),
  });
  try {
    return schema.validateSync(process.env);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Error from root's .env file: ${error.errors}`);
    }
    throw error;
  }
})();

const JWT_SECRET = JSON.parse(ENV_VARS.HASURA_GRAPHQL_JWT_SECRET).key;

export const hashPassword = (password: string) => bcrypt.hash(password, 13);

export const comparePassword = async <T extends { password?: string | null }>(
  user: T,
  password: string,
) => {
  if (!user.password) return false;
  try {
    const same = await bcrypt.compare(password, user.password);
    return same;
  } catch (e) {
    return false;
  }
};

export type ClientTokenPayload = {
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': ClientsRolesEnum[];
    'x-hasura-default-role': ClientsRolesEnum;
    'x-hasura-user-id': string;
  };
};

export const generateClientToken = <
  T extends { id: string; role: ClientsRolesEnum }
>(
  user: T,
) => {
  const payload: ClientTokenPayload = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': [user.role],
      'x-hasura-default-role': user.role,
      'x-hasura-user-id': user.id,
    },
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '10h' });
};

export type UserTokenPayload = {
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': ['user'];
    'x-hasura-default-role': 'user';
    'x-hasura-user-id': string;
  };
};
export const generateUserToken = <T extends { id: string }>(user: T) => {
  const payload = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-default-role': 'user',
      'x-hasura-user-id': user.id,
    },
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '10h' });
};

export const verifyToken = (token: string) =>
  new Promise<ClientTokenPayload>((res, rej) => {
    const verifyCallback: VerifyCallback = (err, decoded) => {
      if (err) rej(err);
      res(decoded as ClientTokenPayload);
    };
    jwt.verify(token, JWT_SECRET, verifyCallback);
  });

export const getResetPasswordMail = (
  email: string,
  url: string,
): Mail.Options => ({
  from: 'PACPROD <noreply@pacprod.com>',
  to: email,
  subject: 'Reset your account password',
  html: `
    <h4><b>Reset Password</b></h4>
    <p>To reset your password, complete this form:</p>
    <a href="${url}">${url}</a>
    <br><br>
    <p>PACPROD's Team</p>
  `,
});

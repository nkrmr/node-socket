import * as yup from 'yup';
import Mail from 'nodemailer/lib/mailer';
import { ClientsRolesEnum } from '../types/common';
export declare const ENV_VARS: import("yup/lib/object").AssertsShape<{
    HASURA_GRAPHQL_ENDPOINT: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    HASURA_GRAPHQL_ADMIN_SECRET: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    HASURA_GRAPHQL_JWT_SECRET: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    SMTP_HOST: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    SMTP_PORT: yup.NumberSchema<number, Record<string, any>, number>;
    SMTP_SECURE: yup.BooleanSchema<boolean, Record<string, any>, boolean>;
    SMTP_USERNAME: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    SMTP_PASSWORD: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    AUTH_SERVER_ENDPOINT: yup.StringSchema<string, Record<string, any>, string>;
    AUTH_SERVER_PORT: yup.NumberSchema<number, Record<string, any>, number>;
    REACT_APP_ENDPOINT: yup.StringSchema<string, Record<string, any>, string>;
    FILE_UPLOAD_DIR: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    INSCRIPTIONS_LOCKED: yup.BooleanSchema<boolean, Record<string, any>, boolean>;
}>;
export declare const hashPassword: (password: string) => Promise<string>;
export declare const comparePassword: <T extends {
    password?: import("yup/lib/types").Maybe<string>;
}>(user: T, password: string) => Promise<boolean>;
export declare type ClientTokenPayload = {
    'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ClientsRolesEnum[];
        'x-hasura-default-role': ClientsRolesEnum;
        'x-hasura-user-id': string;
    };
};
export declare const generateClientToken: <T extends {
    id: string;
    role: ClientsRolesEnum;
}>(user: T) => string;
export declare type UserTokenPayload = {
    'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['user'];
        'x-hasura-default-role': 'user';
        'x-hasura-user-id': string;
    };
};
export declare const generateUserToken: <T extends {
    id: string;
}>(user: T) => string;
export declare const verifyToken: (token: string) => Promise<ClientTokenPayload>;
export declare const getResetPasswordMail: (email: string, url: string) => Mail.Options;

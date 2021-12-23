import Mail from 'nodemailer/lib/mailer';
import { Sdk } from '../types/auth-models';
export declare const getClientsRouter: (graphQLSdk: Sdk, mailTransporter: Mail) => import("express-serve-static-core").Router;

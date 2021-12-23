import { RequestHandler } from 'express';
import { Sdk } from '../types/auth-models';
export declare const canUserPlayGame: (graphQLSdk: Sdk) => RequestHandler;

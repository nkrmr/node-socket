import { RequestHandler } from 'express';
import { Sdk, VerifyRandomDrawingInfosQuery } from '../types/auth-models';
export declare const canClientRandomDrawing: (graphQLSdk: Sdk) => RequestHandler;
export declare type RandomDrawingGainType = VerifyRandomDrawingInfosQuery['gains'][0] & {
    quantity: number;
};

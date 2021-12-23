import { Asserts } from 'yup';
import { PlayArMutation } from '../../types/common';
import { Sdk } from '../../types/auth-models';
import { playGameSchema, randomDrawingSchema } from '../../yup-schemas';
export declare const getArRouter: (graphQLSdk: Sdk) => import("express-serve-static-core").Router;
export declare type PlayArBody = Asserts<typeof playGameSchema>;
export declare type PlayArResponse = (PlayArMutation['arPlayed'] & {
    withRandomDrawings: boolean;
}) | 'NO_PLAY';
export declare type RandomDrawingArBody = Asserts<typeof randomDrawingSchema>;

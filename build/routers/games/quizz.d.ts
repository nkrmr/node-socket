import { Asserts } from 'yup';
import { PlayQuizzMutation } from '../../types/common';
import { Sdk } from '../../types/auth-models';
import { playQuizzSchema, quizzRandomDrawingSchema } from '../../yup-schemas';
export declare const getQuizzRouter: (graphQLSdk: Sdk) => import("express-serve-static-core").Router;
export declare type PlayQuizzBody = Asserts<typeof playQuizzSchema>;
export declare type PlayQuizzResponse = PlayQuizzMutation['quizzPlayed'] & {
    withRandomDrawings: boolean;
};
export declare type RandomDrawingQuizzBody = Asserts<typeof quizzRandomDrawingSchema>;

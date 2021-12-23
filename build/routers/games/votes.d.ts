import { Asserts } from 'yup';
import { PlayVoteMutation } from '../../types/common';
import { Sdk } from '../../types/auth-models';
import { playVoteSchema, randomDrawingSchema } from '../../yup-schemas';
export declare const getVotesRouter: (graphQLSdk: Sdk) => import("express-serve-static-core").Router;
export declare type PlayVoteBody = Asserts<typeof playVoteSchema>;
export declare type PlayVoteResponse = PlayVoteMutation['votePlayed'] & {
    withRandomDrawings: boolean;
};
export declare type RandomDrawingVoteBody = Asserts<typeof randomDrawingSchema>;

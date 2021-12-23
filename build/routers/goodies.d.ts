import { Asserts } from 'yup';
import { PlayGoodieMutation, Sdk } from '../types/auth-models';
import { playGoodieSchema } from '../yup-schemas';
export declare const getGoodiesRouter: (graphQLSdk: Sdk) => import("express-serve-static-core").Router;
export declare type PlayGoodieBody = Asserts<typeof playGoodieSchema>;
export declare type PlayGoodieResponse = PlayGoodieMutation['goodiePlayed'];

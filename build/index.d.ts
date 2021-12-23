import { Asserts } from 'yup';
import { loginSchema, clientSignupSchema, emailSchema, resetPasswordSchema, userSignupSchema, googleLoginSchema, appleLoginSchema, userUpdateSchema, newPasswordSchema, loginAsClientSchema } from './yup-schemas';
import { ClientDisplayFragment, UserDisplayFragment } from './types/common';
export declare const fetchJson: <T>(url: string, method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', body?: {
    [key: string]: unknown;
} | FormData | undefined, authToken?: string | undefined, timeout?: number) => Promise<T>;
declare type Token = {
    token: string;
};
export declare type NewPasswordBody = Asserts<typeof newPasswordSchema>;
export declare type ResetPasswordBody = Asserts<typeof resetPasswordSchema>;
export declare type ClientLoginBody = Asserts<typeof loginSchema>;
export declare type ClientLoginResponse = Token & {
    client: ClientDisplayFragment;
};
export declare type ResellerLoginAsClientBody = Asserts<typeof loginAsClientSchema>;
export declare type ResellerLoginAsClientResponse = ClientLoginResponse;
export declare type ClientSignupBody = Asserts<typeof clientSignupSchema>;
export declare type ClientSignupResponse = ClientLoginResponse;
export declare type ClientForgottenPasswordBody = Asserts<typeof emailSchema>;
export declare type UserLoginBody = Asserts<typeof loginSchema>;
export declare type UserLoginResponse = Token & {
    user: UserDisplayFragment;
};
export declare type UserSignupBody = Asserts<typeof userSignupSchema>;
export declare type UserSignupResponse = UserLoginResponse;
export declare type UserGoogleLoginBody = Asserts<typeof googleLoginSchema>;
export declare type UserAppleLoginBody = Asserts<typeof appleLoginSchema>;
export declare type UserUpdateBody = Asserts<typeof userUpdateSchema>;
export type { RandomDrawingResponse } from './routers/games/commonTypes';
export type { PlayArBody, PlayArResponse, RandomDrawingArBody, } from './routers/games/ar';
export type { PlayQuizzBody, PlayQuizzResponse, RandomDrawingQuizzBody, } from './routers/games/quizz';
export type { PlayVoteBody, PlayVoteResponse, RandomDrawingVoteBody, } from './routers/games/votes';
export type { PlayGoodieBody, PlayGoodieResponse } from './routers/goodies';
export * from './types/common';
export * from './types/models';
export * from './yup-schemas';
export type { ClientTokenPayload, UserTokenPayload } from './utils/authUtils';
export { getStartDateOfFrequency } from './utils/sharedUtils';

import { Asserts } from 'yup';
import {
  loginSchema,
  clientSignupSchema,
  emailSchema,
  resetPasswordSchema,
  userSignupSchema,
  googleLoginSchema,
  appleLoginSchema,
  userUpdateSchema,
  newPasswordSchema,
  loginAsClientSchema,
} from './yup-schemas';
import { ClientDisplayFragment, UserDisplayFragment } from './types/common';

export const fetchJson = <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  body?: { [key: string]: unknown } | FormData,
  authToken?: string,
  timeout = 10000,
): Promise<T> => {
  const controller = new AbortController();
  const headers: {
    [key: string]: string;
  } = ['POST', 'PATCH', 'PUT'].includes(method)
    ? {
        Accept: 'application/json',
        'Content-Type':
          body instanceof FormData ? 'multipart/form-data' : 'application/json',
      }
    : {};
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  const options: RequestInit = {
    method,
    body: body instanceof FormData ? body : JSON.stringify(body),
    headers,
    signal: controller.signal,
  };
  const promise = fetch(url, options);
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  return promise
    .then(async response => {
      clearTimeout(timeoutId);
      const json = await response.json();
      return response.status < 300 ? json : Promise.reject(json);
    })
    .catch(error => {
      clearTimeout(timeoutId);
      return Promise.reject(error);
    });
};

type Token = {
  token: string;
};
// Common
export type NewPasswordBody = Asserts<typeof newPasswordSchema>;
export type ResetPasswordBody = Asserts<typeof resetPasswordSchema>;
// Clients
export type ClientLoginBody = Asserts<typeof loginSchema>;
export type ClientLoginResponse = Token & { client: ClientDisplayFragment };
export type ResellerLoginAsClientBody = Asserts<typeof loginAsClientSchema>;
export type ResellerLoginAsClientResponse = ClientLoginResponse;
export type ClientSignupBody = Asserts<typeof clientSignupSchema>;
export type ClientSignupResponse = ClientLoginResponse;
export type ClientForgottenPasswordBody = Asserts<typeof emailSchema>;
// Users
export type UserLoginBody = Asserts<typeof loginSchema>;
export type UserLoginResponse = Token & { user: UserDisplayFragment };
export type UserSignupBody = Asserts<typeof userSignupSchema>;
export type UserSignupResponse = UserLoginResponse;
export type UserGoogleLoginBody = Asserts<typeof googleLoginSchema>;
export type UserAppleLoginBody = Asserts<typeof appleLoginSchema>;
export type UserUpdateBody = Asserts<typeof userUpdateSchema>;
// Games
export type { RandomDrawingResponse } from './routers/games/commonTypes';
export type {
  PlayArBody,
  PlayArResponse,
  RandomDrawingArBody,
} from './routers/games/ar';
export type {
  PlayQuizzBody,
  PlayQuizzResponse,
  RandomDrawingQuizzBody,
} from './routers/games/quizz';
export type {
  PlayVoteBody,
  PlayVoteResponse,
  RandomDrawingVoteBody,
} from './routers/games/votes';
export type { PlayGoodieBody, PlayGoodieResponse } from './routers/goodies';

export * from './types/common';
export * from './types/models';
export * from './yup-schemas';
export type { ClientTokenPayload, UserTokenPayload } from './utils/authUtils';
export { getStartDateOfFrequency } from './utils/sharedUtils';

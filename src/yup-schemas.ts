/* eslint-disable react/forbid-prop-types */
import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: ({ path }: { path: string }) => ({
      key: 'form.errors.invalid',
      options: { field: path },
    }),
    required: ({ path }: { path: string }) => ({
      key: 'form.errors.required',
      options: { field: path },
    }),
    notType: ({ path }: { path: string }) => ({
      key: 'form.errors.required',
      options: { field: path },
    }),
  },
  string: {
    min: ({ path, min }: { path: string; min: number }) => ({
      key: 'form.errors.string.min',
      options: { field: path, min },
    }),
    max: ({ path, max }: { path: string; max: number }) => ({
      key: 'form.errors.string.max',
      options: { field: path, max },
    }),
    email: () => ({
      key: 'form.errors.invalid',
      options: { field: 'email' },
    }),
    uuid: ({ path }: { path: string }) => ({
      key: 'form.errors.invalid',
      options: { field: path },
    }),
  },
});

export const emailSchema = yup.object({
  email: yup.string().required().email().lowercase(),
});

export const passwordSchema = yup.object({
  password: yup
    .string()
    .required()
    .min(8)
    .max(64)
    .matches(/\d/, 'form.errors.password.missingNumber')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'form.errors.password.missingSpecialCharacter',
    ),
});

export const confirmPasswordSchema = yup.object({
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'form.errors.confirmPassword.different'),
});

export const loginSchema = emailSchema.concat(passwordSchema);
export const googleLoginSchema = yup.object({
  idToken: yup.string().required(),
});
export const appleLoginSchema = yup.object({
  idToken: yup.string().required(),
  nonce: yup.string().required(),
  firstName: yup.string(),
  name: yup.string(),
});
export const loginAsClientSchema = yup.object({
  clientId: yup.string().uuid().required(),
});

const additionalInfosSchema = yup.object({
  birthdate: yup.string().nullable(),
  first_name: yup.string().nullable(),
  address: yup
    .object({
      data: yup
        .object({
          address: yup.string().nullable(),
          city: yup.string().nullable(),
          zipcode: yup.string().nullable(),
          country: yup.string().nullable(),
        })
        .required(),
    })
    .nullable(),
  phone: yup.string().nullable(),
  picture_id: yup.string().uuid().nullable(),
});

const signupSchema = loginSchema
  .concat(confirmPasswordSchema)
  .concat(additionalInfosSchema);

export const clientSignupSchema = signupSchema.shape({
  name: yup.string().required(),
});

export const userSignupSchema = signupSchema.shape({
  name: yup.string().nullable(),
});

export const userUpdateSchema = yup
  .object({
    email: yup.string().email().lowercase(),
    name: yup.string().nullable(),
  })
  .concat(additionalInfosSchema);

export const newPasswordSchema = passwordSchema.concat(confirmPasswordSchema);
export const resetTokenSchema = yup.string().uuid().required();
export const resetPasswordSchema = newPasswordSchema.shape({
  resetTokenId: resetTokenSchema,
});

export const playGameSchema = yup.object({
  gameId: yup.string().uuid().required(),
});

export const playQuizzSchema = yup.object({
  gameId: yup.string().uuid().required(),
  score: yup.number().required(),
  time: yup.number().required(),
});

export const playVoteSchema = yup.object({
  gameId: yup.string().uuid().required(),
  results: yup.array().required(),
});

export const randomDrawingSchema = yup.object({
  gameId: yup.string().uuid().required(),
  gains: yup
    .array(
      yup
        .object({
          id: yup.string().uuid().required(),
          quantity: yup.number().min(1).required(),
        })
        .required(),
    )
    .min(1)
    .required(),
  dateStart: yup.date().max(new Date()).nullable(),
  dateEnd: yup.date().min(yup.ref('dateStart')).nullable(),
});

export const quizzRandomDrawingSchema = randomDrawingSchema.shape({
  minScore: yup.number().nullable(),
});

export const playGoodieSchema = yup.object({
  goodieId: yup.string().uuid().required(),
});

export const magicSchema = yup.object({
  room: yup.string().required(),
  gameId: yup.string().uuid().required(),
  gainId: yup.string().uuid().required(),
});

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicSchema = exports.playGoodieSchema = exports.quizzRandomDrawingSchema = exports.randomDrawingSchema = exports.playVoteSchema = exports.playQuizzSchema = exports.playGameSchema = exports.resetPasswordSchema = exports.resetTokenSchema = exports.newPasswordSchema = exports.userUpdateSchema = exports.userSignupSchema = exports.clientSignupSchema = exports.loginAsClientSchema = exports.appleLoginSchema = exports.googleLoginSchema = exports.loginSchema = exports.confirmPasswordSchema = exports.passwordSchema = exports.emailSchema = void 0;
/* eslint-disable react/forbid-prop-types */
const yup = __importStar(require("yup"));
yup.setLocale({
    mixed: {
        default: ({ path }) => ({
            key: 'form.errors.invalid',
            options: { field: path },
        }),
        required: ({ path }) => ({
            key: 'form.errors.required',
            options: { field: path },
        }),
        notType: ({ path }) => ({
            key: 'form.errors.required',
            options: { field: path },
        }),
    },
    string: {
        min: ({ path, min }) => ({
            key: 'form.errors.string.min',
            options: { field: path, min },
        }),
        max: ({ path, max }) => ({
            key: 'form.errors.string.max',
            options: { field: path, max },
        }),
        email: () => ({
            key: 'form.errors.invalid',
            options: { field: 'email' },
        }),
        uuid: ({ path }) => ({
            key: 'form.errors.invalid',
            options: { field: path },
        }),
    },
});
exports.emailSchema = yup.object({
    email: yup.string().required().email().lowercase(),
});
exports.passwordSchema = yup.object({
    password: yup
        .string()
        .required()
        .min(8)
        .max(64)
        .matches(/\d/, 'form.errors.password.missingNumber')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'form.errors.password.missingSpecialCharacter'),
});
exports.confirmPasswordSchema = yup.object({
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'form.errors.confirmPassword.different'),
});
exports.loginSchema = exports.emailSchema.concat(exports.passwordSchema);
exports.googleLoginSchema = yup.object({
    idToken: yup.string().required(),
});
exports.appleLoginSchema = yup.object({
    idToken: yup.string().required(),
    nonce: yup.string().required(),
    firstName: yup.string(),
    name: yup.string(),
});
exports.loginAsClientSchema = yup.object({
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
const signupSchema = exports.loginSchema
    .concat(exports.confirmPasswordSchema)
    .concat(additionalInfosSchema);
exports.clientSignupSchema = signupSchema.shape({
    name: yup.string().required(),
});
exports.userSignupSchema = signupSchema.shape({
    name: yup.string().nullable(),
});
exports.userUpdateSchema = yup
    .object({
    email: yup.string().email().lowercase(),
    name: yup.string().nullable(),
})
    .concat(additionalInfosSchema);
exports.newPasswordSchema = exports.passwordSchema.concat(exports.confirmPasswordSchema);
exports.resetTokenSchema = yup.string().uuid().required();
exports.resetPasswordSchema = exports.newPasswordSchema.shape({
    resetTokenId: exports.resetTokenSchema,
});
exports.playGameSchema = yup.object({
    gameId: yup.string().uuid().required(),
});
exports.playQuizzSchema = yup.object({
    gameId: yup.string().uuid().required(),
    score: yup.number().required(),
    time: yup.number().required(),
});
exports.playVoteSchema = yup.object({
    gameId: yup.string().uuid().required(),
    results: yup.array().required(),
});
exports.randomDrawingSchema = yup.object({
    gameId: yup.string().uuid().required(),
    gains: yup
        .array(yup
        .object({
        id: yup.string().uuid().required(),
        quantity: yup.number().min(1).required(),
    })
        .required())
        .min(1)
        .required(),
    dateStart: yup.date().max(new Date()).nullable(),
    dateEnd: yup.date().min(yup.ref('dateStart')).nullable(),
});
exports.quizzRandomDrawingSchema = exports.randomDrawingSchema.shape({
    minScore: yup.number().nullable(),
});
exports.playGoodieSchema = yup.object({
    goodieId: yup.string().uuid().required(),
});
exports.magicSchema = yup.object({
    room: yup.string().required(),
    gameId: yup.string().uuid().required(),
    gainId: yup.string().uuid().required(),
});

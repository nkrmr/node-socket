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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResetPasswordMail = exports.verifyToken = exports.generateUserToken = exports.generateClientToken = exports.comparePassword = exports.hashPassword = exports.ENV_VARS = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const yup = __importStar(require("yup"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.ENV_VARS = (() => {
    dotenv_1.default.config({ path: process.env.NODE_ENV_PATH });
    const schema = yup.object({
        HASURA_GRAPHQL_ENDPOINT: yup.string().required(),
        HASURA_GRAPHQL_ADMIN_SECRET: yup.string().required(),
        HASURA_GRAPHQL_JWT_SECRET: yup.string().required(),
        SMTP_HOST: yup.string().required(),
        SMTP_PORT: yup.number().default(465),
        SMTP_SECURE: yup.boolean().default(true),
        SMTP_USERNAME: yup.string().required(),
        SMTP_PASSWORD: yup.string().required(),
        AUTH_SERVER_ENDPOINT: yup.string().default('http://localhost'),
        AUTH_SERVER_PORT: yup.number().default(3002),
        REACT_APP_ENDPOINT: yup.string().default('http://localhost:3000'),
        FILE_UPLOAD_DIR: yup.string().required(),
        INSCRIPTIONS_LOCKED: yup.boolean().default(false),
    });
    try {
        return schema.validateSync(process.env);
    }
    catch (error) {
        if (error instanceof yup.ValidationError) {
            throw new Error(`Error from root's .env file: ${error.errors}`);
        }
        throw error;
    }
})();
const JWT_SECRET = JSON.parse(exports.ENV_VARS.HASURA_GRAPHQL_JWT_SECRET).key;
const hashPassword = (password) => bcrypt_1.default.hash(password, 13);
exports.hashPassword = hashPassword;
const comparePassword = async (user, password) => {
    if (!user.password)
        return false;
    try {
        const same = await bcrypt_1.default.compare(password, user.password);
        return same;
    }
    catch (e) {
        return false;
    }
};
exports.comparePassword = comparePassword;
const generateClientToken = (user) => {
    const payload = {
        'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': [user.role],
            'x-hasura-default-role': user.role,
            'x-hasura-user-id': user.id,
        },
    };
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '10h' });
};
exports.generateClientToken = generateClientToken;
const generateUserToken = (user) => {
    const payload = {
        'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': ['user'],
            'x-hasura-default-role': 'user',
            'x-hasura-user-id': user.id,
        },
    };
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '10h' });
};
exports.generateUserToken = generateUserToken;
const verifyToken = (token) => new Promise((res, rej) => {
    const verifyCallback = (err, decoded) => {
        if (err)
            rej(err);
        res(decoded);
    };
    jsonwebtoken_1.default.verify(token, JWT_SECRET, verifyCallback);
});
exports.verifyToken = verifyToken;
const getResetPasswordMail = (email, url) => ({
    from: 'PACPROD <noreply@pacprod.com>',
    to: email,
    subject: 'Reset your account password',
    html: `
    <h4><b>Reset Password</b></h4>
    <p>To reset your password, complete this form:</p>
    <a href="${url}">${url}</a>
    <br><br>
    <p>PACPROD's Team</p>
  `,
});
exports.getResetPasswordMail = getResetPasswordMail;

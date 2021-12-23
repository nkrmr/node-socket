"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersRouter = void 0;
const express_1 = __importDefault(require("express"));
const crypto_1 = __importDefault(require("crypto"));
const google_auth_library_1 = require("google-auth-library");
const apple_signin_auth_1 = __importDefault(require("apple-signin-auth"));
const yup_1 = require("yup");
const yup_schemas_1 = require("../yup-schemas");
const authUtils_1 = require("../utils/authUtils");
const middlewares_1 = require("../middlewares");
const GOOGLE_CLIENT_ID = '908462321569-38824m21lr08kl1ogo8nq1kaamiv8h1v.apps.googleusercontent.com';
const googleClient = new google_auth_library_1.OAuth2Client(GOOGLE_CLIENT_ID);
const getUsersRouter = (graphQLSdk) => {
    const usersRouter = express_1.default.Router();
    usersRouter.post('/login', async (req, res) => {
        try {
            const { email, password } = yup_schemas_1.loginSchema.validateSync(req.body);
            const data = await graphQLSdk.getUsersByEmail({ email });
            const user = data.users.shift();
            if (!user)
                return res.status(422).json({ message: 'auth.errors.emailNotFound' });
            const equal = await authUtils_1.comparePassword(user, password);
            if (!equal)
                return res.status(422).json({ message: 'auth.errors.wrongPassword' });
            const token = authUtils_1.generateUserToken(user);
            return res.status(200).json({ token, user });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    usersRouter.post('/signup', async (req, res) => {
        try {
            const body = yup_schemas_1.userSignupSchema.validateSync(req.body);
            const data = await graphQLSdk.getUsersByEmail({ email: body.email });
            if (data.users.length)
                return res
                    .status(422)
                    .json({ message: 'auth.errors.emailAlreadyRegistered' });
            // Remove address if everything is undefined
            const address = body.address &&
                !body.address.data.address &&
                !body.address.data.zipcode &&
                !body.address.data.city
                ? undefined
                : body.address;
            const user = {
                ...body,
                password: await authUtils_1.hashPassword(body.password),
                confirmPassword: undefined,
                address,
            };
            const { insert_users_one: newUser } = await graphQLSdk.insertUser({
                user,
            });
            if (!newUser)
                return res.status(500).json({ message: 'common.errorMsg' });
            const token = authUtils_1.generateUserToken(newUser);
            return res.status(200).json({ token, user: newUser });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    usersRouter.post('/google/login', async (req, res) => {
        try {
            const { idToken } = yup_schemas_1.googleLoginSchema.validateSync(req.body);
            const ticket = await googleClient.verifyIdToken({
                idToken,
                audience: GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            if (!payload)
                throw Error('no_payload');
            const { email, given_name: firstName, family_name: name } = payload;
            if (!email)
                throw Error('no_email');
            const data = await graphQLSdk.getUsersByEmail({ email });
            let user = data.users.shift();
            if (!user) {
                const { insert_users_one: newUser } = await graphQLSdk.insertUser({
                    user: { email, first_name: firstName, name },
                });
                if (!newUser)
                    throw Error();
                user = newUser;
            }
            const token = authUtils_1.generateUserToken(user); // eslint-disable-line @typescript-eslint/no-non-null-assertion
            return res.status(200).json({ token, user });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: e.message || 'common.errorMsg' });
        }
    });
    usersRouter.post('/apple/login', async (req, res) => {
        try {
            const { idToken, nonce, firstName, name } = yup_schemas_1.appleLoginSchema.validateSync(req.body);
            const { sub: appleId, email } = await apple_signin_auth_1.default.verifyIdToken(idToken, {
                audience: [
                    'com.pac-prod.flashplay',
                    'com.pac-prod.flashplay.debug',
                    'com.pac-prod.flashplay.android',
                ],
                nonce: crypto_1.default.createHash('sha256').update(nonce).digest('hex'),
            });
            const usersData = await graphQLSdk.getUsersByAppleId({ appleId });
            let user = usersData.users.shift();
            if (!user) {
                if (!email)
                    throw Error('Email needed to register');
                const upsertData = await graphQLSdk.upsertUser({
                    user: {
                        email,
                        name,
                        first_name: firstName,
                        apple_id: appleId,
                    },
                });
                if (!upsertData.insert_users_one)
                    throw new Error();
                user = upsertData.insert_users_one;
            }
            const token = authUtils_1.generateUserToken(user);
            return res.status(200).json({ token, user });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: e.message || 'common.errorMsg' });
        }
    });
    usersRouter.post('/new-password', middlewares_1.authenticate, async (req, res) => {
        try {
            const body = yup_schemas_1.newPasswordSchema.validateSync(req.body);
            const user = {
                password: await authUtils_1.hashPassword(body.password),
            };
            await graphQLSdk.updateUser({
                userId: req.userId,
                user,
            });
            return res.status(200).json(null);
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    return usersRouter;
};
exports.getUsersRouter = getUsersRouter;

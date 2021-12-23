"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientsRouter = void 0;
const express_1 = __importDefault(require("express"));
const yup_1 = require("yup");
const middlewares_1 = require("../middlewares");
const authUtils_1 = require("../utils/authUtils");
const yup_schemas_1 = require("../yup-schemas");
const getClientsRouter = (graphQLSdk, mailTransporter) => {
    const clientsRouter = express_1.default.Router();
    clientsRouter.post('/login', async (req, res) => {
        try {
            const { email, password } = yup_schemas_1.loginSchema.validateSync(req.body);
            const data = await graphQLSdk.getClientsByEmail({ email });
            const client = data.clients.shift();
            if (!client)
                return res.status(422).json({ message: 'auth.errors.emailNotFound' });
            const equal = await authUtils_1.comparePassword(client, password);
            if (!equal)
                return res.status(422).json({ message: 'auth.errors.wrongPassword' });
            const token = authUtils_1.generateClientToken(client);
            return res.status(200).json({ token, client });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    clientsRouter.post('/login-as-client', middlewares_1.authenticate, async (req, res) => {
        try {
            const { clientId } = yup_schemas_1.loginAsClientSchema.validateSync(req.body);
            const { clients_by_pk: client } = await graphQLSdk.getClientById({
                id: clientId,
            });
            if (!client ||
                (client.reseller_id !== req.userId && req.userRole !== 'admin'))
                return res.status(422).json({ message: 'auth.errors.wrongClientId' });
            const token = authUtils_1.generateClientToken(client);
            return res.status(200).json({ token, client });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    clientsRouter.post('/signup', async (req, res) => {
        try {
            if (authUtils_1.ENV_VARS.INSCRIPTIONS_LOCKED)
                return res
                    .status(403)
                    .json({ message: 'auth.errors.inscriptionsLocked' });
            const body = yup_schemas_1.clientSignupSchema.validateSync(req.body);
            const data = await graphQLSdk.getClientsByEmail({ email: body.email });
            if (data.clients.length)
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
            const client = {
                ...body,
                password: await authUtils_1.hashPassword(body.password),
                confirmPassword: undefined,
                address,
            };
            const { insert_clients_one: newClient } = await graphQLSdk.insertClient({
                client,
            });
            if (!newClient)
                return res.status(500).json({ message: 'common.errorMsg' });
            const token = authUtils_1.generateClientToken(newClient);
            return res.status(200).json({ token, client: newClient });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    clientsRouter.post('/forgotten-password', async (req, res) => {
        try {
            const { email } = yup_schemas_1.emailSchema.validateSync(req.body);
            const data = await graphQLSdk.getClientsByEmail({ email });
            const client = data.clients.shift();
            if (!client)
                return res.status(422).json({ errors: ['auth.errors.emailNotFound'] });
            const tokenResponse = await graphQLSdk.insertClientPasswordForgottenToken({
                client_id: client.id,
            });
            if (!tokenResponse.insert_clients_password_forgotten_tokens_one) {
                throw new Error('No data in reponse after insertClientPasswordForgottenToken');
            }
            const token = tokenResponse.insert_clients_password_forgotten_tokens_one.id;
            const url = `${authUtils_1.ENV_VARS.REACT_APP_ENDPOINT}/en/reset-password/?token=${token}`;
            return mailTransporter.sendMail(authUtils_1.getResetPasswordMail(email, url), err => {
                if (err) {
                    return res.status(500).json({ message: err.message });
                }
                return res.status(200).json('common.emailSent');
            });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    clientsRouter.post('/reset-password', async (req, res) => {
        try {
            const { resetTokenId, password } = yup_schemas_1.resetPasswordSchema.validateSync(req.body);
            const limitDate = new Date(new Date().getTime() - 30 * 60000).toISOString();
            const data = await graphQLSdk.resetPassword({
                resetTokenId,
                limitDate,
                newPassword: await authUtils_1.hashPassword(password),
            });
            const isPasswordReset = data.update_clients?.affected_rows;
            if (!isPasswordReset) {
                const isResetTokenDeleted = data.delete_clients_password_forgotten_tokens_by_pk?.id;
                if (!isResetTokenDeleted) {
                    return res
                        .status(422)
                        .json({ errors: ['auth.errors.wrongResetToken'] });
                }
                return res
                    .status(422)
                    .json({ errors: ['auth.errors.expiredResetToken'] });
            }
            return res.status(200).json('auth.passwordReset');
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    return clientsRouter;
};
exports.getClientsRouter = getClientsRouter;

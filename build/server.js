"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const graphql_request_1 = require("graphql-request");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const routers_1 = require("./routers");
const auth_models_1 = require("./types/auth-models");
const authUtils_1 = require("./utils/authUtils");
const limiter = express_rate_limit_1.default({
    windowMs: 30 * 1000,
    max: 20,
});
const app = express_1.default();
app.use(limiter);
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const mailTransporter = nodemailer_1.default.createTransport({
    pool: true,
    host: authUtils_1.ENV_VARS.SMTP_HOST,
    port: authUtils_1.ENV_VARS.SMTP_PORT,
    secure: authUtils_1.ENV_VARS.SMTP_SECURE,
    auth: {
        user: authUtils_1.ENV_VARS.SMTP_USERNAME,
        pass: authUtils_1.ENV_VARS.SMTP_PASSWORD,
    },
});
mailTransporter.verify(error => {
    // eslint-disable-next-line no-console
    console.log(error || 'Server ready to send emails');
});
const graphQLClient = new graphql_request_1.GraphQLClient(`${authUtils_1.ENV_VARS.HASURA_GRAPHQL_ENDPOINT}/v1/graphql`, {
    headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': authUtils_1.ENV_VARS.HASURA_GRAPHQL_ADMIN_SECRET,
    },
});
const graphQLSdk = auth_models_1.getSdk(graphQLClient);
// SOCKET IO
const httpServer = http_1.createServer(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});
app.use('/clients', routers_1.getClientsRouter(graphQLSdk, mailTransporter));
app.use('/users', routers_1.getUsersRouter(graphQLSdk));
app.use('/games', routers_1.getGamesRouter(graphQLSdk));
app.use('/goodies', routers_1.getGoodiesRouter(graphQLSdk));
app.use('/files', routers_1.getFilesRouter(graphQLSdk));
app.use('/static', express_1.default.static(authUtils_1.ENV_VARS.FILE_UPLOAD_DIR));
app.use('/magic', routers_1.getMagicRouter(graphQLSdk));
app.set('socketio', io);
io.on('connection', async (socket) => {
    const { room } = socket.handshake.query;
    if (!room) {
        return;
    }
    await socket.join(room);
    socket.on('disconnect', () => ({}));
});
// Start server
httpServer.listen(authUtils_1.ENV_VARS.AUTH_SERVER_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${authUtils_1.ENV_VARS.AUTH_SERVER_PORT}`);
});

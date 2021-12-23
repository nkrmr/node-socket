import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { GraphQLClient } from 'graphql-request';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import {
  getClientsRouter,
  getFilesRouter,
  getGamesRouter,
  getGoodiesRouter,
  getMagicRouter,
  getUsersRouter,
} from './routers';
import { getSdk } from './types/auth-models';
import { ENV_VARS } from './utils/authUtils';

const limiter = rateLimit({
  windowMs: 30 * 1000, // 30 sec
  max: 20, // limit each IP to 5 requests per windowMs
});
const app = express();
app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mailTransporter = nodemailer.createTransport({
  pool: true,
  host: ENV_VARS.SMTP_HOST,
  port: ENV_VARS.SMTP_PORT,
  secure: ENV_VARS.SMTP_SECURE, // use TLS
  auth: {
    user: ENV_VARS.SMTP_USERNAME,
    pass: ENV_VARS.SMTP_PASSWORD,
  },
});

mailTransporter.verify(error => {
  // eslint-disable-next-line no-console
  console.log(error || 'Server ready to send emails');
});

const graphQLClient = new GraphQLClient(
  `${ENV_VARS.HASURA_GRAPHQL_ENDPOINT}/v1/graphql`,
  {
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': ENV_VARS.HASURA_GRAPHQL_ADMIN_SECRET,
    },
  },
);
const graphQLSdk = getSdk(graphQLClient);

// SOCKET IO
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use('/clients', getClientsRouter(graphQLSdk, mailTransporter));
app.use('/users', getUsersRouter(graphQLSdk));
app.use('/games', getGamesRouter(graphQLSdk));
app.use('/goodies', getGoodiesRouter(graphQLSdk));
app.use('/files', getFilesRouter(graphQLSdk));
app.use('/static', express.static(ENV_VARS.FILE_UPLOAD_DIR));
app.use('/magic', getMagicRouter(graphQLSdk));

app.set('socketio', io);

io.on('connection', async (socket: Socket) => {
  const { room } = socket.handshake.query;

  if (!room) {
    return;
  }
  await socket.join(room);
  socket.on('disconnect', () => ({}));
});

// Start server
httpServer.listen(ENV_VARS.AUTH_SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${ENV_VARS.AUTH_SERVER_PORT}`);
});

import express from 'express';

import { Sdk } from '../types/auth-models';
import {
  authenticate,
  canClientRandomDrawing,
  canUserPlayGame,
} from '../middlewares';
import { getArRouter } from './games/ar';
import { getQuizzRouter } from './games/quizz';
import { getVotesRouter } from './games/votes';

export const getGamesRouter = (graphQLSdk: Sdk) => {
  const gamesRouter = express.Router();

  gamesRouter.use(authenticate);
  gamesRouter.use('/*/play', canUserPlayGame(graphQLSdk));
  gamesRouter.use('/*/random-drawings', canClientRandomDrawing(graphQLSdk));

  gamesRouter.use('/ar', getArRouter(graphQLSdk));
  gamesRouter.use('/quizz', getQuizzRouter(graphQLSdk));
  gamesRouter.use('/vote', getVotesRouter(graphQLSdk));

  return gamesRouter;
};

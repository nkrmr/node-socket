"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGamesRouter = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const ar_1 = require("./games/ar");
const quizz_1 = require("./games/quizz");
const votes_1 = require("./games/votes");
const getGamesRouter = (graphQLSdk) => {
    const gamesRouter = express_1.default.Router();
    gamesRouter.use(middlewares_1.authenticate);
    gamesRouter.use('/*/play', middlewares_1.canUserPlayGame(graphQLSdk));
    gamesRouter.use('/*/random-drawings', middlewares_1.canClientRandomDrawing(graphQLSdk));
    gamesRouter.use('/ar', ar_1.getArRouter(graphQLSdk));
    gamesRouter.use('/quizz', quizz_1.getQuizzRouter(graphQLSdk));
    gamesRouter.use('/vote', votes_1.getVotesRouter(graphQLSdk));
    return gamesRouter;
};
exports.getGamesRouter = getGamesRouter;

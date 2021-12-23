"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canUserPlayGame = void 0;
const sharedUtils_1 = require("../utils/sharedUtils");
const yup_schemas_1 = require("../yup-schemas");
const canUserPlayGame = graphQLSdk => async (req, res, next) => {
    if (!req.userId)
        return res.sendStatus(401);
    try {
        const { gameId } = yup_schemas_1.playGameSchema.validateSync(req.body);
        const { games_by_pk: gameFrequencyData, } = await graphQLSdk.getGameFrequency({
            gameId,
        });
        if (!gameFrequencyData)
            throw Error('invalid gameId');
        if (!gameFrequencyData.is_active)
            throw Error('This game is actually inactive');
        const dateFrom = sharedUtils_1.getStartDateOfFrequency(gameFrequencyData.frequency, gameFrequencyData.tz);
        const { games_played_aggregate: { aggregate: gamePlayed }, } = await graphQLSdk.getGamePlayedCount({
            gameId,
            userId: req.userId,
            dateFrom,
        });
        if (!gamePlayed)
            throw Error("Can't find number of times you played this game");
        if (gamePlayed.count &&
            gamePlayed.count >= gameFrequencyData.max_participations) {
            if (gameFrequencyData.type.name === 'ar')
                req.noGain = true;
            else
                throw Error('game.resultAlreadyPlayed');
        }
        return next();
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(403).json(err.message);
        return res.status(500).json(err);
    }
};
exports.canUserPlayGame = canUserPlayGame;

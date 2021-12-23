"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVotesRouter = void 0;
const express_1 = __importDefault(require("express"));
const yup_1 = require("yup");
const gameUtils_1 = require("../../utils/gameUtils");
const yup_schemas_1 = require("../../yup-schemas");
const getVotesRouter = (graphQLSdk) => {
    const votesRouter = express_1.default.Router();
    votesRouter.post('/play', async (req, res) => {
        try {
            const { gameId, results } = yup_schemas_1.playVoteSchema.validateSync(req.body);
            const { vote } = await graphQLSdk.getInfosToPlayVote({ gameId });
            if (!vote)
                return res.status(422).json({ message: 'vote.errors.notFound' });
            const { with_instant_gains: withInstantGains, with_random_drawings: withRandomDrawings, games_gains_available: gains, } = vote;
            const gainId = withInstantGains
                ? gameUtils_1.getRandomGain(gains, // Have to override because the generated type 'GamesGainsAvailable' is wrong......
                vote.keep_cumulated_probability)
                : undefined;
            const { votePlayed } = await graphQLSdk
                .playVote({
                gameId,
                results,
                userId: req.userId,
                gainId,
            })
                .catch(() => graphQLSdk.playVote({
                gameId,
                results,
                userId: req.userId,
            }));
            if (!votePlayed)
                throw Error();
            return res.status(200).json({ ...votePlayed, withRandomDrawings });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: JSON.stringify(e) });
        }
    });
    votesRouter.post('/random-drawing', async (req, res) => {
        try {
            const { gameId, gains, dateStart, dateEnd } = req.body;
            const { players } = await graphQLSdk.getVotePlayers({
                gameId,
                dateStart,
                dateEnd,
            });
            const sumGains = gains.reduce((acc, gain) => acc + gain.quantity, 0);
            if (players.length < sumGains)
                throw Error('randomDrawing.form.errors.moreGainsThanParticipations');
            const playersIds = players.map(p => p.user_id);
            const randomDrawingsInput = gains.reduce((acc, gain) => {
                let count = gain.quantity;
                while (count) {
                    const winnerId = gameUtils_1.spliceRandomElement(playersIds); // eslint-disable-line @typescript-eslint/no-non-null-assertion
                    acc.push({
                        game_id: gameId,
                        gain_id: gain.id,
                        winner_id: winnerId,
                    });
                    --count;
                }
                return acc;
            }, []);
            const { randomDrawings } = await graphQLSdk.insertRandomDrawings({
                randomDrawingsInput,
            });
            if (!randomDrawings)
                throw Error();
            const response = randomDrawings.returning;
            return res.status(200).json(response);
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError)
                return res.status(422).json({ errors: e.errors });
            if (e instanceof Error)
                return res.status(400).json({ message: e.message });
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    return votesRouter;
};
exports.getVotesRouter = getVotesRouter;

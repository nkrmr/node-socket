"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArRouter = void 0;
const express_1 = __importDefault(require("express"));
const yup_1 = require("yup");
const gameUtils_1 = require("../../utils/gameUtils");
const yup_schemas_1 = require("../../yup-schemas");
const getArRouter = (graphQLSdk) => {
    const arRouter = express_1.default.Router();
    arRouter.get('/portal-scale', async (req, res) => res.status(200).json([0.1, 0.2, 0.1]));
    arRouter.post('/play', async (req, res) => {
        try {
            const { gameId } = yup_schemas_1.playGameSchema.validateSync(req.body);
            const { ar } = await graphQLSdk.getInfosToPlayAr({ gameId });
            if (!ar)
                return res.status(422).json({ message: 'ar.errors.notFound' });
            const { with_instant_gains: withInstantGains, with_random_drawings: withRandomDrawings, games_gains_available: gains, } = ar;
            if (req.noGain)
                return res.status(200).json('NO_PLAY');
            const gainId = withInstantGains
                ? gameUtils_1.getRandomGain(gains, // Have to override because the generated type 'GamesGainsAvailable' is wrong......
                ar.keep_cumulated_probability)
                : undefined;
            const { arPlayed } = await graphQLSdk
                .playAr({
                gameId,
                userId: req.userId,
                gainId,
            })
                .catch(() => graphQLSdk.playAr({
                gameId,
                userId: req.userId,
            }));
            if (!arPlayed)
                throw Error();
            return res.status(200).json({ ...arPlayed, withRandomDrawings });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    arRouter.post('/random-drawing', async (req, res) => {
        try {
            const { gameId, gains, dateStart, dateEnd } = req.body;
            const { players } = await graphQLSdk.getArPlayers({
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
    return arRouter;
};
exports.getArRouter = getArRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuizzRouter = void 0;
const express_1 = __importDefault(require("express"));
const yup_1 = require("yup");
const gameUtils_1 = require("../../utils/gameUtils");
const yup_schemas_1 = require("../../yup-schemas");
const getQuizzRouter = (graphQLSdk) => {
    const quizzRouter = express_1.default.Router();
    quizzRouter.post('/play', async (req, res) => {
        try {
            const { gameId, score, time } = yup_schemas_1.playQuizzSchema.validateSync(req.body);
            const { quizz } = await graphQLSdk.getInfosToPlayQuizz({ gameId });
            if (!quizz)
                return res.status(422).json({ message: 'quizz.errors.notFound' });
            const { with_instant_gains: withInstantGains, with_random_drawings: withRandomDrawings, games_gains_available: gains, winning_percentage: winningPercentage, quizz_questions: quizzQuestions, } = quizz;
            const totalQuestionsPoints = quizzQuestions.reduce((acc, { total_points: totalPoints }) => acc + totalPoints, 0);
            const gainId = withInstantGains &&
                score >= (totalQuestionsPoints * winningPercentage) / 100
                ? gameUtils_1.getRandomGain(gains, // Have to override because the generated type 'GamesGainsAvailable' is wrong......
                quizz.keep_cumulated_probability)
                : undefined;
            const { quizzPlayed } = await graphQLSdk
                .playQuizz({
                gameId,
                score,
                time,
                userId: req.userId,
                gainId,
            })
                .catch(() => graphQLSdk.playQuizz({
                gameId,
                score,
                time,
                userId: req.userId,
            }));
            if (!quizzPlayed)
                throw Error();
            return res.status(200).json({ ...quizzPlayed, withRandomDrawings });
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: JSON.stringify(e) });
        }
    });
    quizzRouter.post('/random-drawing', async (req, res) => {
        try {
            const { gameId, gains, dateStart, dateEnd, minScore, } = yup_schemas_1.quizzRandomDrawingSchema.validateSync(req.body);
            const { players } = await graphQLSdk.getQuizzPlayers({
                gameId,
                dateStart: dateStart?.toISOString(),
                dateEnd: dateEnd?.toISOString(),
                minScore,
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
    return quizzRouter;
};
exports.getQuizzRouter = getQuizzRouter;

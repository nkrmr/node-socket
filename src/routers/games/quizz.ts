import express from 'express';
import { Asserts, ValidationError } from 'yup';

import {
  PlayQuizzMutation,
  QuizzQuestionsFragment,
  RandomDrawingsInsertInput,
} from '../../types/common';
import { Sdk } from '../../types/auth-models';
import { RandomDrawingGainType } from '../../middlewares/canClientRandomDrawing';
import { getRandomGain, spliceRandomElement } from '../../utils/gameUtils';
import { playQuizzSchema, quizzRandomDrawingSchema } from '../../yup-schemas';
import { GamesGainsAvailable, RandomDrawingResponse } from './commonTypes';

export const getQuizzRouter = (graphQLSdk: Sdk) => {
  const quizzRouter = express.Router();

  quizzRouter.post('/play', async (req, res) => {
    try {
      const { gameId, score, time } = playQuizzSchema.validateSync(req.body);

      const { quizz } = await graphQLSdk.getInfosToPlayQuizz({ gameId });

      if (!quizz)
        return res.status(422).json({ message: 'quizz.errors.notFound' });

      const {
        with_instant_gains: withInstantGains,
        with_random_drawings: withRandomDrawings,
        games_gains_available: gains,
        winning_percentage: winningPercentage,
        quizz_questions: quizzQuestions,
      } = quizz;

      const totalQuestionsPoints = quizzQuestions.reduce(
        (
          acc: number,
          { total_points: totalPoints }: QuizzQuestionsFragment,
        ): number => acc + totalPoints,
        0,
      );

      const gainId =
        withInstantGains &&
        score >= (totalQuestionsPoints * winningPercentage) / 100
          ? getRandomGain(
              gains as GamesGainsAvailable, // Have to override because the generated type 'GamesGainsAvailable' is wrong......
              quizz.keep_cumulated_probability,
            )
          : undefined;

      const { quizzPlayed } = await graphQLSdk
        .playQuizz({
          gameId,
          score,
          time,
          userId: req.userId,
          gainId,
        })
        .catch(() =>
          graphQLSdk.playQuizz({
            gameId,
            score,
            time,
            userId: req.userId,
          }),
        );

      if (!quizzPlayed) throw Error();

      return res.status(200).json({ ...quizzPlayed, withRandomDrawings });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: JSON.stringify(e) });
    }
  });

  quizzRouter.post('/random-drawing', async (req, res) => {
    try {
      const {
        gameId,
        gains,
        dateStart,
        dateEnd,
        minScore,
      } = quizzRandomDrawingSchema.validateSync(req.body);

      const { players } = await graphQLSdk.getQuizzPlayers({
        gameId,
        dateStart: dateStart?.toISOString(),
        dateEnd: dateEnd?.toISOString(),
        minScore,
      });

      const sumGains = (gains as RandomDrawingGainType[]).reduce(
        (acc, gain) => acc + gain.quantity,
        0,
      );
      if (players.length < sumGains)
        throw Error('randomDrawing.form.errors.moreGainsThanParticipations');

      const playersIds = players.map(p => p.user_id);

      const randomDrawingsInput = (gains as RandomDrawingGainType[]).reduce(
        (acc, gain) => {
          let count = gain.quantity;
          while (count) {
            const winnerId = spliceRandomElement(playersIds)!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
            acc.push({
              game_id: gameId,
              gain_id: gain.id,
              winner_id: winnerId,
            });
            --count;
          }
          return acc;
        },
        [] as RandomDrawingsInsertInput[],
      );

      const { randomDrawings } = await graphQLSdk.insertRandomDrawings({
        randomDrawingsInput,
      });

      if (!randomDrawings) throw Error();

      const response: RandomDrawingResponse = randomDrawings.returning;

      return res.status(200).json(response);
    } catch (e) {
      if (e instanceof ValidationError)
        return res.status(422).json({ errors: e.errors });
      if (e instanceof Error)
        return res.status(400).json({ message: e.message });
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  return quizzRouter;
};

export type PlayQuizzBody = Asserts<typeof playQuizzSchema>;
export type PlayQuizzResponse = PlayQuizzMutation['quizzPlayed'] & {
  withRandomDrawings: boolean;
};
export type RandomDrawingQuizzBody = Asserts<typeof quizzRandomDrawingSchema>;

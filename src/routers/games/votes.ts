import express from 'express';
import { Asserts, ValidationError } from 'yup';

import {
  PlayVoteMutation,
  RandomDrawingsInsertInput,
} from '../../types/common';
import { Sdk } from '../../types/auth-models';
import { RandomDrawingGainType } from '../../middlewares/canClientRandomDrawing';
import { getRandomGain, spliceRandomElement } from '../../utils/gameUtils';
import { playVoteSchema, randomDrawingSchema } from '../../yup-schemas';
import { GamesGainsAvailable, RandomDrawingResponse } from './commonTypes';

export const getVotesRouter = (graphQLSdk: Sdk) => {
  const votesRouter = express.Router();

  votesRouter.post('/play', async (req, res) => {
    try {
      const { gameId, results } = playVoteSchema.validateSync(req.body);

      const { vote } = await graphQLSdk.getInfosToPlayVote({ gameId });

      if (!vote)
        return res.status(422).json({ message: 'vote.errors.notFound' });

      const {
        with_instant_gains: withInstantGains,
        with_random_drawings: withRandomDrawings,
        games_gains_available: gains,
      } = vote;
      const gainId = withInstantGains
        ? getRandomGain(
            gains as GamesGainsAvailable, // Have to override because the generated type 'GamesGainsAvailable' is wrong......
            vote.keep_cumulated_probability,
          )
        : undefined;

      const { votePlayed } = await graphQLSdk
        .playVote({
          gameId,
          results,
          userId: req.userId,
          gainId,
        })
        .catch(() =>
          graphQLSdk.playVote({
            gameId,
            results,
            userId: req.userId,
          }),
        );

      if (!votePlayed) throw Error();

      return res.status(200).json({ ...votePlayed, withRandomDrawings });
    } catch (e) {
      if (e instanceof ValidationError) {
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

  return votesRouter;
};

export type PlayVoteBody = Asserts<typeof playVoteSchema>;
export type PlayVoteResponse = PlayVoteMutation['votePlayed'] & {
  withRandomDrawings: boolean;
};
export type RandomDrawingVoteBody = Asserts<typeof randomDrawingSchema>;

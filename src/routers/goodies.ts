import express from 'express';
import { Asserts, ValidationError } from 'yup';

import { authenticate } from '../middlewares';
import { PlayGoodieMutation, Sdk } from '../types/auth-models';
import { playGoodieSchema } from '../yup-schemas';

export const getGoodiesRouter = (graphQLSdk: Sdk) => {
  const goodiesRouter = express.Router();

  goodiesRouter.use(authenticate);

  goodiesRouter.post('/play', async (req, res) => {
    try {
      const { goodieId } = playGoodieSchema.validateSync(req.body);

      const { goodiePlayed } = await graphQLSdk.playGoodie({
        goodieId,
        userId: req.userId,
      });

      if (!goodiePlayed) throw Error();

      return res.status(200).json(goodiePlayed);
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: JSON.stringify(e) });
    }
  });

  return goodiesRouter;
};

export type PlayGoodieBody = Asserts<typeof playGoodieSchema>;
export type PlayGoodieResponse = PlayGoodieMutation['goodiePlayed'];

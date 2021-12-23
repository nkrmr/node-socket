import { RequestHandler } from 'express';

import { Sdk, VerifyRandomDrawingInfosQuery } from '../types/auth-models';
import { randomDrawingSchema } from '../yup-schemas';

export const canClientRandomDrawing: (
  graphQLSdk: Sdk,
) => RequestHandler = graphQLSdk => async (req, res, next) => {
  if (!req.userId) return res.sendStatus(401);

  try {
    const { gameId, gains } = randomDrawingSchema.validateSync(req.body);
    const gainsIds = gains.map(g => g.id);

    const {
      game,
      gains: gainsData,
    } = await graphQLSdk.verifyRandomDrawingInfos({
      gameId,
      gainsIds,
    });

    const missingIds: string[] = gains.map(g => g.id);
    const unauthorizedGains: string[] = [];
    const missingStockGains: string[] = [];

    const gainsMerged = gainsData.reduce((acc, gainData) => {
      const index = gains.findIndex(g => g.id === gainData.id);

      missingIds.splice(index, 1);
      if (gainData.client_id !== req.userId) {
        unauthorizedGains.push(gainData.name);
      }
      if (gains[index].quantity > gainData.stock) {
        missingStockGains.push(gainData.name);
      }
      acc.push({
        ...gainData,
        quantity: gains[index].quantity,
      });
      return acc;
    }, [] as Array<RandomDrawingGainType>);

    if (!game) throw Error('invalid gameId');
    if (game.client_id !== req.userId)
      throw Error('Unauthorized to do a random drawing on this game');

    if (missingIds.length)
      throw Error(`[${missingIds.join(', ')}] are invalid gains ids`);

    if (unauthorizedGains.length)
      throw Error(
        `The following gains don't belong to you: [${unauthorizedGains.join(
          ', ',
        )}]`,
      );

    if (missingStockGains.length) {
      throw Error(`[${missingStockGains.join(', ')}] don't have enough stock`);
    }

    req.body.gains = gainsMerged;

    return next();
  } catch (err) {
    if (err instanceof Error) return res.status(403).json(err.message);
    return res.status(500).json(err);
  }
};

export type RandomDrawingGainType = VerifyRandomDrawingInfosQuery['gains'][0] & {
  quantity: number;
};

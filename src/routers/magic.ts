import express from 'express';
import { ValidationError } from 'yup';

import { recursivelyStopLooser } from '../utils/magicRandomDrawingsUtils';
import { magicSchema } from '../yup-schemas';
import { Sdk } from '../types/auth-models';

export const getMagicRouter = (graphQLSdk: Sdk) => {
  const magicRouter = express.Router();

  magicRouter.post('/', async (req, res) => {
    const io = req.app.get('socketio');

    try {
      const { room, gameId, gainId } = magicSchema.validateSync(req.body);
      const sockets = await io.in(room).fetchSockets();

      io.to(room).emit('launched', true);

      // Get random winner
      const randomWinner = Math.floor(Math.random() * sockets.length);
      const winner = sockets[randomWinner];

      // Stop looser
      recursivelyStopLooser(
        sockets.filter((s: any, i: number) => i !== randomWinner),
        io,
      );

      setTimeout(() => {
        io.to(winner.id).emit('win', true);
      }, 10000);

      const { randomDrawings } = await graphQLSdk.insertRandomDrawings({
        randomDrawingsInput: {
          game_id: gameId,
          gain_id: gainId,
          winner_id: winner.handshake.auth.user.id,
        },
      });

      // Kill all sockets
      setTimeout(() => {
        io.disconnectSockets();
      }, 12000);

      return res.status(200).json({ randomDrawings });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.errors });
      }
      console.error(e);
      return res.status(500).json({ message: 'common.errorMsg' });
    }
  });

  return magicRouter;
};

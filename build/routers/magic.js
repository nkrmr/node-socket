"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMagicRouter = void 0;
const express_1 = __importDefault(require("express"));
const yup_1 = require("yup");
const magicRandomDrawingsUtils_1 = require("../utils/magicRandomDrawingsUtils");
const yup_schemas_1 = require("../yup-schemas");
const getMagicRouter = (graphQLSdk) => {
    const magicRouter = express_1.default.Router();
    magicRouter.post('/', async (req, res) => {
        const io = req.app.get('socketio');
        try {
            const { room, gameId, gainId } = yup_schemas_1.magicSchema.validateSync(req.body);
            const sockets = await io.in(room).fetchSockets();
            io.to(room).emit('launched', true);
            // Get random winner
            const randomWinner = Math.floor(Math.random() * sockets.length);
            const winner = sockets[randomWinner];
            // Stop looser
            magicRandomDrawingsUtils_1.recursivelyStopLooser(sockets.filter((s, i) => i !== randomWinner), io);
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
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: 'common.errorMsg' });
        }
    });
    return magicRouter;
};
exports.getMagicRouter = getMagicRouter;

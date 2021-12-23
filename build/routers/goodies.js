"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoodiesRouter = void 0;
const express_1 = __importDefault(require("express"));
const yup_1 = require("yup");
const middlewares_1 = require("../middlewares");
const yup_schemas_1 = require("../yup-schemas");
const getGoodiesRouter = (graphQLSdk) => {
    const goodiesRouter = express_1.default.Router();
    goodiesRouter.use(middlewares_1.authenticate);
    goodiesRouter.post('/play', async (req, res) => {
        try {
            const { goodieId } = yup_schemas_1.playGoodieSchema.validateSync(req.body);
            const { goodiePlayed } = await graphQLSdk.playGoodie({
                goodieId,
                userId: req.userId,
            });
            if (!goodiePlayed)
                throw Error();
            return res.status(200).json(goodiePlayed);
        }
        catch (e) {
            if (e instanceof yup_1.ValidationError) {
                return res.status(422).json({ errors: e.errors });
            }
            console.error(e);
            return res.status(500).json({ message: JSON.stringify(e) });
        }
    });
    return goodiesRouter;
};
exports.getGoodiesRouter = getGoodiesRouter;

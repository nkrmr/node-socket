"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canUserPlayGame = exports.canClientRandomDrawing = exports.authenticate = void 0;
var authenticate_1 = require("./authenticate");
Object.defineProperty(exports, "authenticate", { enumerable: true, get: function () { return authenticate_1.authenticate; } });
var canClientRandomDrawing_1 = require("./canClientRandomDrawing");
Object.defineProperty(exports, "canClientRandomDrawing", { enumerable: true, get: function () { return canClientRandomDrawing_1.canClientRandomDrawing; } });
var canUserPlayGame_1 = require("./canUserPlayGame");
Object.defineProperty(exports, "canUserPlayGame", { enumerable: true, get: function () { return canUserPlayGame_1.canUserPlayGame; } });

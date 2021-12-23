"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GAME_PLAYED_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAME_PLAYED_FRAGMENT = client_1.gql `
  fragment GamesGainsAvailable on games_gains_available {
    gain_id
    probability
    stock
    stock_won
  }
`;

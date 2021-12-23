"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_GAME_GAIN = exports.UPDATE_GAME_GAIN = exports.INSERT_GAME_GAIN = exports.GAMES_GAINS_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAMES_GAINS_FRAGMENT = client_1.gql `
  fragment GamesGains on games_gains {
    game_id
    gain_id
    stock
    stock_won
    is_active
    probability
    gain {
      ...Gain
    }
  }
`;
exports.INSERT_GAME_GAIN = client_1.gql `
  mutation insertGameGain($gameGain: games_gains_insert_input!) {
    insert_games_gains_one(object: $gameGain) {
      ...GamesGains
    }
  }
`;
exports.UPDATE_GAME_GAIN = client_1.gql `
  mutation updateGameGain(
    $gameId: uuid!
    $gainId: uuid!
    $gameGain: games_gains_set_input!
  ) {
    update_games_gains_by_pk(
      pk_columns: { game_id: $gameId, gain_id: $gainId }
      _set: $gameGain
    ) {
      ...GamesGains
    }
  }
`;
exports.DELETE_GAME_GAIN = client_1.gql `
  mutation deleteGameGain($gameId: uuid!, $gainId: uuid!) {
    delete_games_gains_by_pk(game_id: $gameId, gain_id: $gainId) {
      ...GamesGains
    }
  }
`;

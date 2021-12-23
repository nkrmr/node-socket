"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAY_AR = exports.AR_PLAYED_FRAGMENT = exports.GET_INFOS_TO_PLAY_AR = exports.INFOS_TO_PLAY_AR_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.INFOS_TO_PLAY_AR_FRAGMENT = client_1.gql `
  fragment InfosToPlayAr on ar {
    id
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    keep_cumulated_probability
    games_gains_available(order_by: { probability: asc }) {
      ...GamesGainsAvailable
    }
  }
`;
exports.GET_INFOS_TO_PLAY_AR = client_1.gql `
  query getInfosToPlayAr($gameId: uuid!) {
    ar: ar_by_pk(id: $gameId) {
      ...InfosToPlayAr
    }
  }
`;
exports.AR_PLAYED_FRAGMENT = client_1.gql `
  fragment ArPlayed on ar_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
`;
exports.PLAY_AR = client_1.gql `
  mutation playAr($gameId: uuid!, $gainId: uuid, $userId: uuid!) {
    arPlayed: insert_ar_played_one(
      object: { game_id: $gameId, gain_id: $gainId, user_id: $userId }
    ) {
      ...ArPlayed
    }
  }
`;

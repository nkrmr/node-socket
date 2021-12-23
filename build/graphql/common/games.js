"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_GAME_PLAYED_COUNT = exports.GET_GAME_FREQUENCY = exports.GAME_WON_FRAGMENT = exports.GAME_PLAYED_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAME_PLAYED_FRAGMENT = client_1.gql `
  fragment GamePlayed on games_played {
    id
    game_id
    user_id
    gain {
      ...GainWon
    }
    played_at
  }
`;
exports.GAME_WON_FRAGMENT = client_1.gql `
  fragment GameWon on games_played {
    id
    played_at
    gain {
      ...GainWon
    }
    gain_validated
    game {
      name
      valorization
    }
  }
`;
exports.GET_GAME_FREQUENCY = client_1.gql `
  query getGameFrequency($gameId: uuid!) {
    games_by_pk(id: $gameId) {
      is_active
      frequency
      max_participations
      tz
      type {
        name
      }
    }
  }
`;
exports.GET_GAME_PLAYED_COUNT = client_1.gql `
  query getGamePlayedCount(
    $gameId: uuid!
    $userId: uuid!
    $dateFrom: timestamptz
  ) {
    games_played_aggregate(
      where: {
        game_id: { _eq: $gameId }
        user_id: { _eq: $userId }
        played_at: { _gte: $dateFrom }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

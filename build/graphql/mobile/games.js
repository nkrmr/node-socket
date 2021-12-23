"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TEST_GAMES = exports.GET_NEARBY_GAMES = exports.NEARBY_GAME_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.NEARBY_GAME_FRAGMENT = client_1.gql `
  fragment NearbyGame on games {
    ...Game
    is_test
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
`;
exports.GET_NEARBY_GAMES = client_1.gql `
  query getNearbyGames(
    $location: geography!
    $distance: Float!
    $currentDate: date!
  ) {
    games(
      where: {
        location: { _st_d_within: { from: $location, distance: $distance } }
        is_test: { _neq: true }
        is_active: { _eq: true }
        date_start: { _lte: $currentDate }
        date_end: { _gte: $currentDate }
        is_archive: { _neq: true }
      }
    ) {
      ...NearbyGame
    }
  }
`;
exports.GET_TEST_GAMES = client_1.gql `
  query getTestGames {
    games(where: { is_test: { _eq: true } }) {
      ...NearbyGame
    }
  }
`;

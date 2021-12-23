"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_GAME_TYPE_BY_ID = exports.GET_GAMES_TYPES = exports.GAME_TYPE_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAME_TYPE_FRAGMENT = client_1.gql `
  fragment GameType on games_types {
    id
    name
    description
    price
    color
    acronym
    radius_price_range
    participations_price_range
    trackers_price_range
  }
`;
exports.GET_GAMES_TYPES = client_1.gql `
  query getGamesTypes {
    games_types(order_by: { name: asc }) {
      ...GameType
    }
  }
`;
exports.GET_GAME_TYPE_BY_ID = client_1.gql `
  query getGameTypeById($gameTypeId: uuid!) {
    games_types_by_pk(id: $gameTypeId) {
      ...GameType
    }
  }
`;

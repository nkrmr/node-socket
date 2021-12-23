"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARCHIVE_CLIENT_GAME = exports.UPDATE_GAME = exports.INSERT_GAME = exports.GET_GAMES_BY_CLIENT_AND_GAME_TYPE = exports.GET_GAMES_MINIMAL_INFOS = exports.GAME_MINIMAL_INFOS_FRAGMENT = exports.GAME_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAME_FRAGMENT = client_1.gql `
  fragment Game on games {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    description
    gtc
    instructions
    address
    radius
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    valorization
    frequency
    max_participations
    created_at
    type_id
    location
    city
    keep_cumulated_probability
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
  }
`;
exports.GAME_MINIMAL_INFOS_FRAGMENT = client_1.gql `
  fragment GameMinimalInfos on games {
    id
    name
    client_id
    is_private
    type {
      name
    }
  }
`;
exports.GET_GAMES_MINIMAL_INFOS = client_1.gql `
  query getGamesMinimalInfos($clientId: uuid) {
    games(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...GameMinimalInfos
    }
  }
`;
exports.GET_GAMES_BY_CLIENT_AND_GAME_TYPE = client_1.gql `
  query getGamesByClientAndGameType($clientId: uuid!, $gameTypeId: uuid!) {
    games(
      where: {
        client_id: { _eq: $clientId }
        type_id: { _eq: $gameTypeId }
        is_archive: { _neq: true }
      }
      order_by: { created_at: desc }
    ) {
      ...Game
    }
  }
`;
exports.INSERT_GAME = client_1.gql `
  mutation insertGame($game: games_insert_input!) {
    insert_games_one(object: $game) {
      ...Game
    }
  }
`;
exports.UPDATE_GAME = client_1.gql `
  mutation updateGame($gameId: uuid!, $game: games_set_input!) {
    __typename
    update_games_by_pk(pk_columns: { id: $gameId }, _set: $game) {
      __typename
      ...Game
    }
  }
`;
exports.ARCHIVE_CLIENT_GAME = client_1.gql `
  mutation archiveGame($gameId: uuid!) {
    __typename
    update_games_by_pk(
      pk_columns: { id: $gameId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Game
    }
  }
`;

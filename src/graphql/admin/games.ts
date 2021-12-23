import { gql } from '@apollo/client';

export const GAME_FRAGMENT = gql`
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

export const GAME_MINIMAL_INFOS_FRAGMENT = gql`
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

export const GET_GAMES_MINIMAL_INFOS = gql`
  query getGamesMinimalInfos($clientId: uuid) {
    games(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...GameMinimalInfos
    }
  }
`;

export const GET_GAMES_BY_CLIENT_AND_GAME_TYPE = gql`
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

export const INSERT_GAME = gql`
  mutation insertGame($game: games_insert_input!) {
    insert_games_one(object: $game) {
      ...Game
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation updateGame($gameId: uuid!, $game: games_set_input!) {
    __typename
    update_games_by_pk(pk_columns: { id: $gameId }, _set: $game) {
      __typename
      ...Game
    }
  }
`;

export const ARCHIVE_CLIENT_GAME = gql`
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

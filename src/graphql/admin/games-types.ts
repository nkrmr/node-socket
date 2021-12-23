import { gql } from '@apollo/client';

export const GAME_TYPE_FRAGMENT = gql`
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

export const GET_GAMES_TYPES = gql`
  query getGamesTypes {
    games_types(order_by: { name: asc }) {
      ...GameType
    }
  }
`;

export const GET_GAME_TYPE_BY_ID = gql`
  query getGameTypeById($gameTypeId: uuid!) {
    games_types_by_pk(id: $gameTypeId) {
      ...GameType
    }
  }
`;

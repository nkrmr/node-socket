import { gql } from '@apollo/client';

export const NEARBY_GAME_FRAGMENT = gql`
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

export const GET_NEARBY_GAMES = gql`
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

export const GET_TEST_GAMES = gql`
  query getTestGames {
    games(where: { is_test: { _eq: true } }) {
      ...NearbyGame
    }
  }
`;

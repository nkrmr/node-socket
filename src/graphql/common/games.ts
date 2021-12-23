import { gql } from '@apollo/client';

export const GAME_PLAYED_FRAGMENT = gql`
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

export const GAME_WON_FRAGMENT = gql`
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

export const GET_GAME_FREQUENCY = gql`
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

export const GET_GAME_PLAYED_COUNT = gql`
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

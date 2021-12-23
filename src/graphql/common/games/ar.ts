import { gql } from '@apollo/client';

export const INFOS_TO_PLAY_AR_FRAGMENT = gql`
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

export const GET_INFOS_TO_PLAY_AR = gql`
  query getInfosToPlayAr($gameId: uuid!) {
    ar: ar_by_pk(id: $gameId) {
      ...InfosToPlayAr
    }
  }
`;

export const AR_PLAYED_FRAGMENT = gql`
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

export const PLAY_AR = gql`
  mutation playAr($gameId: uuid!, $gainId: uuid, $userId: uuid!) {
    arPlayed: insert_ar_played_one(
      object: { game_id: $gameId, gain_id: $gainId, user_id: $userId }
    ) {
      ...ArPlayed
    }
  }
`;

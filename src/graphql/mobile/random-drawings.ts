import { gql } from '@apollo/client';

export const RANDOM_DRAWING_WON_FRAGMENT = gql`
  fragment RandomDrawingWon on random_drawings {
    __typename
    id
    created_at
    game_id
    gain {
      ...GainWon
    }
    gain_validated
  }
`;

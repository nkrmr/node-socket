import { gql } from '@apollo/client';

export const GAIN_WON_FRAGMENT = gql`
  fragment GainWon on gains {
    __typename
    id
    name
    description
    image {
      __typename
      ...Asset
    }
    instructions
    is_virtual
    gains_virtuals {
      __typename
      format
      id
      value
    }
    gtc
    client {
      __typename
      picture {
        __typename
        ...Asset
      }
    }
    template_id
  }
`;

export const VALIDATE_GAIN = gql`
  mutation validateGain($id: bigint!, $fromRandomDrawing: Boolean!) {
    update_games_played_by_pk(
      pk_columns: { id: $id }
      _set: { gain_validated: true }
    ) @skip(if: $fromRandomDrawing) {
      id
      gain_validated
    }
    update_random_drawings_by_pk(
      pk_columns: { id: $id }
      _set: { gain_validated: true }
    ) @include(if: $fromRandomDrawing) {
      id
      gain_validated
    }
  }
`;

export const GET_GAINS_WON = gql`
  query getGainsWon {
    games_played(
      where: { gain_id: { _is_null: false }, gain_validated: { _eq: false } }
      order_by: { played_at: desc }
    ) {
      ...GameWon
    }
    random_drawings(
      where: { gain_validated: { _eq: false } }
      order_by: { created_at: desc }
    ) {
      ...RandomDrawingWon
    }
  }
`;

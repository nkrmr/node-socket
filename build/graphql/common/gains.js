"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_GAINS_WON = exports.VALIDATE_GAIN = exports.GAIN_WON_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAIN_WON_FRAGMENT = client_1.gql `
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
exports.VALIDATE_GAIN = client_1.gql `
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
exports.GET_GAINS_WON = client_1.gql `
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

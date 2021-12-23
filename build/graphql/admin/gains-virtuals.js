"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSERT_GAINS_VIRTUALS = exports.GET_GAINS_VIRTUALS_BY_GAIN = exports.GAIN_VIRTUAL_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAIN_VIRTUAL_FRAGMENT = client_1.gql `
  fragment GainVirtual on gains_virtuals {
    id
    format
    value
    gain_id
  }
`;
exports.GET_GAINS_VIRTUALS_BY_GAIN = client_1.gql `
  query getGainsVirtualsByGain($gainId: uuid!) {
    gains_virtuals(where: { gain_id: { _eq: $gainId } }) {
      ...GainVirtual
    }
  }
`;
exports.INSERT_GAINS_VIRTUALS = client_1.gql `
  mutation insertGainsVirtuals(
    $gainId: uuid!
    $gainsVirtuals: [gains_virtuals_insert_input!]!
  ) {
    delete_gains_virtuals(where: { gain_id: { _eq: $gainId } }) {
      affected_rows
    }
    insert_gains_virtuals(objects: $gainsVirtuals) {
      returning {
        format
        gain_id
        id
        value
      }
    }
  }
`;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARCHIVE_GAIN = exports.UPDATE_GAIN = exports.INSERT_GAIN = exports.GET_GAINS_BY_CLIENT = exports.GAIN_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GAIN_FRAGMENT = client_1.gql `
  fragment Gain on gains {
    id
    is_active
    is_virtual
    name
    description
    stock
    image {
      ...Asset
    }
    client_id
    gtc
    instructions
    created_at
    template_id
    template {
      ...Template
    }
  }
`;
exports.GET_GAINS_BY_CLIENT = client_1.gql `
  query getGainsByClient($clientId: uuid!) {
    gains(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...Gain
    }
  }
`;
exports.INSERT_GAIN = client_1.gql `
  mutation insertGain($gain: gains_insert_input!) {
    insert_gains_one(object: $gain) {
      ...Gain
    }
  }
`;
exports.UPDATE_GAIN = client_1.gql `
  mutation updateGain($gainId: uuid!, $gain: gains_set_input!) {
    __typename
    update_gains_by_pk(pk_columns: { id: $gainId }, _set: $gain) {
      __typename
      ...Gain
    }
  }
`;
exports.ARCHIVE_GAIN = client_1.gql `
  mutation archiveGain($gainId: uuid!) {
    __typename
    update_gains_by_pk(
      pk_columns: { id: $gainId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Gain
    }
  }
`;

import { gql } from '@apollo/client';

export const GAIN_FRAGMENT = gql`
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

export const GET_GAINS_BY_CLIENT = gql`
  query getGainsByClient($clientId: uuid!) {
    gains(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...Gain
    }
  }
`;

export const INSERT_GAIN = gql`
  mutation insertGain($gain: gains_insert_input!) {
    insert_gains_one(object: $gain) {
      ...Gain
    }
  }
`;

export const UPDATE_GAIN = gql`
  mutation updateGain($gainId: uuid!, $gain: gains_set_input!) {
    __typename
    update_gains_by_pk(pk_columns: { id: $gainId }, _set: $gain) {
      __typename
      ...Gain
    }
  }
`;

export const ARCHIVE_GAIN = gql`
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

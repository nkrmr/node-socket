import { gql } from '@apollo/client';

export const GAIN_VIRTUAL_FRAGMENT = gql`
  fragment GainVirtual on gains_virtuals {
    id
    format
    value
    gain_id
  }
`;

export const GET_GAINS_VIRTUALS_BY_GAIN = gql`
  query getGainsVirtualsByGain($gainId: uuid!) {
    gains_virtuals(where: { gain_id: { _eq: $gainId } }) {
      ...GainVirtual
    }
  }
`;

export const INSERT_GAINS_VIRTUALS = gql`
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

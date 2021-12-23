import { gql } from '@apollo/client';

export const ADDRESS_FRAGMENT = gql`
  fragment Address on addresses {
    address
    city
    zipcode
    country
  }
`;

export const UPSERT_ADDRESS = gql`
  mutation upsertAddress($address: addresses_insert_input!) {
    insert_addresses_one(
      object: $address
      on_conflict: {
        constraint: addresses_pkey
        update_columns: [address, city, zipcode, country]
      }
    ) {
      id
      ...Address
    }
  }
`;

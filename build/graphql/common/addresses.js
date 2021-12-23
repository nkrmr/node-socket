"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPSERT_ADDRESS = exports.ADDRESS_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.ADDRESS_FRAGMENT = client_1.gql `
  fragment Address on addresses {
    address
    city
    zipcode
    country
  }
`;
exports.UPSERT_ADDRESS = client_1.gql `
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

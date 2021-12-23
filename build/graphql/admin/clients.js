"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_CLIENT = exports.UPDATE_CLIENT_IS_ACTIVE = exports.GET_CLIENT_BY_ID = exports.GET_CLIENTS = exports.CLIENT_DISPLAY_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.CLIENT_DISPLAY_FRAGMENT = client_1.gql `
  fragment ClientDisplay on clients {
    id
    created_at
    email
    name
    first_name
    phone
    address_id
    stripe_customer_id
    company
    vat_id
    address {
      address
      city
      zipcode
      country
    }
    discount
    role
    is_active
    reseller_id
    reseller {
      email
      name
      first_name
    }
    picture {
      ...Asset
    }
  }
`;
exports.GET_CLIENTS = client_1.gql `
  query getClients($withDiscount: Boolean = false) {
    clients(order_by: { is_active: desc, name: asc, first_name: asc }) {
      ...ClientDisplay
    }
  }
`;
exports.GET_CLIENT_BY_ID = client_1.gql `
  query getClientById($id: uuid!) {
    clients_by_pk(id: $id) {
      ...ClientDisplay
    }
  }
`;
exports.UPDATE_CLIENT_IS_ACTIVE = client_1.gql `
  mutation updateClientIsActive($id: uuid!, $isActive: Boolean!) {
    __typename
    update_clients_by_pk(
      pk_columns: { id: $id }
      _set: { is_active: $isActive }
    ) {
      __typename
      id
      is_active
    }
  }
`;
exports.UPDATE_CLIENT = client_1.gql `
  mutation updateClient($clientId: uuid!, $client: clients_set_input) {
    update_clients_by_pk(pk_columns: { id: $clientId }, _set: $client) {
      __typename
      ...ClientDisplay
    }
  }
`;

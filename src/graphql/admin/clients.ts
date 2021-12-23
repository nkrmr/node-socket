import { gql } from '@apollo/client';

export const CLIENT_DISPLAY_FRAGMENT = gql`
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

export const GET_CLIENTS = gql`
  query getClients($withDiscount: Boolean = false) {
    clients(order_by: { is_active: desc, name: asc, first_name: asc }) {
      ...ClientDisplay
    }
  }
`;

export const GET_CLIENT_BY_ID = gql`
  query getClientById($id: uuid!) {
    clients_by_pk(id: $id) {
      ...ClientDisplay
    }
  }
`;

export const UPDATE_CLIENT_IS_ACTIVE = gql`
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

export const UPDATE_CLIENT = gql`
  mutation updateClient($clientId: uuid!, $client: clients_set_input) {
    update_clients_by_pk(pk_columns: { id: $clientId }, _set: $client) {
      __typename
      ...ClientDisplay
    }
  }
`;

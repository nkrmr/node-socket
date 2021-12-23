import { gql } from '@apollo/client';

export const USER_DISPLAY_FRAGMENT = gql`
  fragment UserDisplay on users {
    id
    created_at
    email
    name
    first_name
    birthdate
    address_id
    address {
      address
      city
      zipcode
      country
    }
    is_active
    is_tester
    picture_id
    picture {
      ...Asset
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($id: uuid!) {
    users_by_pk(id: $id) {
      ...UserDisplay
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: uuid!, $user: users_set_input) {
    update_users_by_pk(pk_columns: { id: $userId }, _set: $user) {
      ...UserDisplay
    }
  }
`;

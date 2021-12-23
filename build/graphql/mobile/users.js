"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_USER = exports.GET_USER_BY_ID = exports.USER_DISPLAY_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.USER_DISPLAY_FRAGMENT = client_1.gql `
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
exports.GET_USER_BY_ID = client_1.gql `
  query getUserById($id: uuid!) {
    users_by_pk(id: $id) {
      ...UserDisplay
    }
  }
`;
exports.UPDATE_USER = client_1.gql `
  mutation updateUser($userId: uuid!, $user: users_set_input) {
    update_users_by_pk(pk_columns: { id: $userId }, _set: $user) {
      ...UserDisplay
    }
  }
`;

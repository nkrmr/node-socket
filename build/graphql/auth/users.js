"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPSERT_USER = exports.INSERT_USER = exports.GET_USERS_BY_APPLE_ID = exports.GET_USERS_BY_EMAIL = void 0;
const client_1 = require("@apollo/client");
exports.GET_USERS_BY_EMAIL = client_1.gql `
  query getUsersByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      ...UserDisplay
      password
      apple_id
    }
  }
`;
exports.GET_USERS_BY_APPLE_ID = client_1.gql `
  query getUsersByAppleId($appleId: String!) {
    users(where: { apple_id: { _eq: $appleId } }) {
      ...UserDisplay
    }
  }
`;
exports.INSERT_USER = client_1.gql `
  mutation insertUser($user: users_insert_input!) {
    insert_users_one(object: $user) {
      ...UserDisplay
    }
  }
`;
exports.UPSERT_USER = client_1.gql `
  mutation upsertUser($user: users_insert_input!) {
    insert_users_one(
      object: $user
      on_conflict: {
        constraint: users_email_key
        update_columns: [apple_id, name, first_name]
      }
    ) {
      ...UserDisplay
    }
  }
`;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESET_PASSWORD = exports.INSERT_CLIENT_PASSWORD_FORGOTTEN_TOKEN = exports.INSERT_CLIENT = exports.GET_CLIENTS_BY_EMAIL = void 0;
const client_1 = require("@apollo/client");
exports.GET_CLIENTS_BY_EMAIL = client_1.gql `
  query getClientsByEmail($email: String!) {
    clients(where: { email: { _eq: $email } }) {
      ...ClientDisplay
      password
    }
  }
`;
exports.INSERT_CLIENT = client_1.gql `
  mutation insertClient($client: clients_insert_input!) {
    insert_clients_one(object: $client) {
      ...ClientDisplay
    }
  }
`;
exports.INSERT_CLIENT_PASSWORD_FORGOTTEN_TOKEN = client_1.gql `
  mutation insertClientPasswordForgottenToken($client_id: uuid!) {
    insert_clients_password_forgotten_tokens_one(
      object: { client_id: $client_id }
      on_conflict: {
        constraint: clients_password_forgotten_tokens_client_id_key
        update_columns: [id, created_at]
      }
    ) {
      id
    }
  }
`;
exports.RESET_PASSWORD = client_1.gql `
  mutation resetPassword(
    $resetTokenId: uuid!
    $limitDate: timestamp!
    $newPassword: String!
  ) {
    update_clients(
      where: {
        password_forgotten_token: {
          id: { _eq: $resetTokenId }
          created_at: { _gte: $limitDate }
        }
      }
      _set: { password: $newPassword }
    ) {
      affected_rows
    }
    delete_clients_password_forgotten_tokens_by_pk(id: $resetTokenId) {
      id
    }
  }
`;

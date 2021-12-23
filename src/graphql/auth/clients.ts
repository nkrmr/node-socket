import { gql } from '@apollo/client';

export const GET_CLIENTS_BY_EMAIL = gql`
  query getClientsByEmail($email: String!) {
    clients(where: { email: { _eq: $email } }) {
      ...ClientDisplay
      password
    }
  }
`;

export const INSERT_CLIENT = gql`
  mutation insertClient($client: clients_insert_input!) {
    insert_clients_one(object: $client) {
      ...ClientDisplay
    }
  }
`;

export const INSERT_CLIENT_PASSWORD_FORGOTTEN_TOKEN = gql`
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

export const RESET_PASSWORD = gql`
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

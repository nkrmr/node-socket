import { gql } from '@apollo/client';

export const GET_USERS_BY_EMAIL = gql`
  query getUsersByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      ...UserDisplay
      password
      apple_id
    }
  }
`;

export const GET_USERS_BY_APPLE_ID = gql`
  query getUsersByAppleId($appleId: String!) {
    users(where: { apple_id: { _eq: $appleId } }) {
      ...UserDisplay
    }
  }
`;

export const INSERT_USER = gql`
  mutation insertUser($user: users_insert_input!) {
    insert_users_one(object: $user) {
      ...UserDisplay
    }
  }
`;

export const UPSERT_USER = gql`
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

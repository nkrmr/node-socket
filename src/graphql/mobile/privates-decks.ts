import { gql } from '@apollo/client';

export const PRIVATE_DECK_DISPLAY_FRAGMENT = gql`
  fragment PrivateDeckDisplay on privates_decks {
    id
    name
    description
    code
    date_start
    date_end
    is_active
  }
`;

export const PRIVATE_DECK_M2M_USERS_FRAGMENT = gql`
  fragment PrivateDeckM2mUser on privates_decks_m2m_users {
    private_deck_id
    user_id
    private_deck {
      ...PrivateDeckDisplay
    }
  }
`;

export const GET_PRIVATES_DECKS_BY_CODE = gql`
  query getPrivateDeckByCode($code: String!) {
    privates_decks(
      where: { code: { _eq: $code }, is_archive: { _neq: true } }
    ) {
      ...PrivateDeck
    }
  }
`;

export const INSERT_PRIVATES_DECKS_M2M_USERS = gql`
  mutation insertPrivateDeckM2mUser($privateDeckId: uuid!) {
    insert_privates_decks_m2m_users_one(
      object: { private_deck_id: $privateDeckId }
    ) {
      ...PrivateDeckM2mUser
    }
  }
`;

export const GET_PRIVATES_DECKS_BY_USER = gql`
  query getPrivatesDeckByUser($userId: uuid!) {
    privates_decks_m2m_users(where: { user_id: { _eq: $userId } }) {
      ...PrivateDeckM2mUser
    }
  }
`;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PRIVATES_DECKS_BY_USER = exports.INSERT_PRIVATES_DECKS_M2M_USERS = exports.GET_PRIVATES_DECKS_BY_CODE = exports.PRIVATE_DECK_M2M_USERS_FRAGMENT = exports.PRIVATE_DECK_DISPLAY_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.PRIVATE_DECK_DISPLAY_FRAGMENT = client_1.gql `
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
exports.PRIVATE_DECK_M2M_USERS_FRAGMENT = client_1.gql `
  fragment PrivateDeckM2mUser on privates_decks_m2m_users {
    private_deck_id
    user_id
    private_deck {
      ...PrivateDeckDisplay
    }
  }
`;
exports.GET_PRIVATES_DECKS_BY_CODE = client_1.gql `
  query getPrivateDeckByCode($code: String!) {
    privates_decks(
      where: { code: { _eq: $code }, is_archive: { _neq: true } }
    ) {
      ...PrivateDeck
    }
  }
`;
exports.INSERT_PRIVATES_DECKS_M2M_USERS = client_1.gql `
  mutation insertPrivateDeckM2mUser($privateDeckId: uuid!) {
    insert_privates_decks_m2m_users_one(
      object: { private_deck_id: $privateDeckId }
    ) {
      ...PrivateDeckM2mUser
    }
  }
`;
exports.GET_PRIVATES_DECKS_BY_USER = client_1.gql `
  query getPrivatesDeckByUser($userId: uuid!) {
    privates_decks_m2m_users(where: { user_id: { _eq: $userId } }) {
      ...PrivateDeckM2mUser
    }
  }
`;

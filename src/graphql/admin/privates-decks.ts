import { gql } from '@apollo/client';

export const PRIVATE_DECK_M2M_ENTITIES_FRAGMENT = gql`
  fragment PrivateDeckM2mEntities on privates_decks_m2m_entities {
    __typename
    private_deck
    entity_id
    game {
      __typename
      ...GameMinimalInfos
    }
    communication {
      __typename
      ...CommunnicationMinimalInfos
    }
  }
`;

export const PRIVATE_DECK_FRAGMENT = gql`
  fragment PrivateDeck on privates_decks {
    id
    name
    description
    code
    date_start
    date_end
    is_active
    is_archive
    client_id
    created_at
    privates_decks_m2m_entities {
      ...PrivateDeckM2mEntities
    }
  }
`;

export const GET_PRIVATES_DECKS_BY_CLIENT = gql`
  query getPrivatesDecksByClient($clientId: uuid!) {
    privates_decks(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...PrivateDeck
    }
  }
`;

export const INSERT_PRIVATE_DECK = gql`
  mutation insertPrivateDeck($privateDeck: privates_decks_insert_input!) {
    insert_privates_decks_one(object: $privateDeck) {
      ...PrivateDeck
    }
  }
`;

export const UPDATE_PRIVATE_DECK = gql`
  mutation updatePrivateDeck(
    $privateDeckId: uuid!
    $privateDeck: privates_decks_set_input!
  ) {
    __typename
    update_privates_decks_by_pk(
      pk_columns: { id: $privateDeckId }
      _set: $privateDeck
    ) {
      __typename
      ...PrivateDeck
    }
  }
`;

export const ARCHIVE_PRIVATE_DECK = gql`
  mutation archivePrivateDeck($privateDeckId: uuid!) {
    __typename
    update_privates_decks_by_pk(
      pk_columns: { id: $privateDeckId }
      _set: { is_archive: true }
    ) {
      __typename
      ...PrivateDeck
    }
  }
`;

export const GET_GAMES_COMMUNICATIONS_MINIMAL_INFOS = gql`
  query getGamesCommunicationsMinimalInfos($clientId: uuid) {
    games(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...GameMinimalInfos
    }
    communications(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: desc }
    ) {
      ...CommunnicationMinimalInfos
    }
  }
`;

export const INSERT_PRIVATES_DECKS_M2M_ENTITIES = gql`
  mutation insertPrivateDeckM2mEntity($privateDeckId: uuid!, $entityId: uuid!) {
    insert_privates_decks_m2m_entities_one(
      object: { private_deck: $privateDeckId, entity_id: $entityId }
    ) {
      ...PrivateDeckM2mEntities
    }
  }
`;

export const GET_PRIVATES_DECKS_M2M_ENTITIES = gql`
  query getPrivateDeckM2mEntities($privateDeckId: uuid!) {
    privates_decks_m2m_entities(
      where: { private_deck: { _eq: $privateDeckId } }
    ) {
      ...PrivateDeckM2mEntities
    }
  }
`;

export const DELETE_PRIVATES_DECKS_M2M_ENTITIES_BY_PK = gql`
  mutation deletePrivateDeckM2mEntitiesByPk(
    $privateDeckId: uuid!
    $entityId: uuid!
  ) {
    delete_privates_decks_m2m_entities_by_pk(
      entity_id: $entityId
      private_deck: $privateDeckId
    ) {
      ...PrivateDeckM2mEntities
    }
  }
`;

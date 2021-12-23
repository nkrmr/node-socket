import { gql } from '@apollo/client';

export const ESTIMATE_M2M_ENTITIES_FRAGMENT = gql`
  fragment EstimateM2mEntity on estimates_m2m_entities {
    id
    name
    estimate_id
    entity_id
    radius
    trackers
    games_types {
      ...GameType
    }
    communications_types {
      ...CommunicationType
    }
  }
`;

export const ESTIMATE_FRAGMENT = gql`
  fragment Estimate on estimates {
    id
    name
    date_start
    date_end
    status
    participations_credits
    created_at
    updated_at
    client_id
    is_archive
    estimates_m2m_entities {
      ...EstimateM2mEntity
    }
  }
`;

export const GET_ESTIMATES_BY_CLIENT = gql`
  query getEstimatesByClient($clientId: uuid!) {
    estimates(
      where: { client_id: { _eq: $clientId } }
      order_by: { created_at: desc }
    ) {
      ...Estimate
    }
  }
`;

export const INSERT_ESTIMATE = gql`
  mutation insertEstimate($estimate: estimates_insert_input!) {
    insert_estimates_one(object: $estimate) {
      ...Estimate
    }
  }
`;

export const UPDATE_ESTIMATE = gql`
  mutation updateEstimate($estimateId: uuid!, $estimate: estimates_set_input!) {
    update_estimates_by_pk(pk_columns: { id: $estimateId }, _set: $estimate) {
      ...Estimate
    }
  }
`;

export const ARCHIVE_ESTIMATE = gql`
  mutation archiveEstimate($estimateId: uuid!) {
    update_estimates_by_pk(
      pk_columns: { id: $estimateId }
      _set: { is_archive: true }
    ) {
      ...Estimate
    }
  }
`;

export const INSERT_ESTIMATES_M2M_ENTITIES = gql`
  mutation insertEstimateM2mEntity(
    $estimateM2mEntity: estimates_m2m_entities_insert_input!
  ) {
    insert_estimates_m2m_entities_one(object: $estimateM2mEntity) {
      ...EstimateM2mEntity
    }
  }
`;

export const UPDATE_ESTIMATES_M2M_ENTITIES = gql`
  mutation updateEstimateM2mEntity(
    $estimateM2mEntityId: uuid!
    $estimateM2mEntity: estimates_m2m_entities_set_input!
  ) {
    update_estimates_m2m_entities_by_pk(
      pk_columns: { id: $estimateM2mEntityId }
      _set: $estimateM2mEntity
    ) {
      ...EstimateM2mEntity
    }
  }
`;

export const GET_ESTIMATES_M2M_ENTITIES = gql`
  query getEstimatesM2mEntities($estimateId: uuid!) {
    __typename
    estimates_m2m_entities(where: { estimate_id: { _eq: $estimateId } }) {
      __typename
      ...EstimateM2mEntity
    }
  }
`;

export const ARCHIVE_ESTIMATES_M2M_ENTITIES_BY_PK = gql`
  mutation archiveEstimatesM2mEntitiesByPk($estimateM2mEntityId: uuid!) {
    delete_estimates_m2m_entities_by_pk(id: $estimateM2mEntityId) {
      ...EstimateM2mEntity
    }
  }
`;

export const GET_GAMES_COMMUNICATIONS_TYPES = gql`
  query getGamesCommunicationsTypes {
    games_types {
      ...GameType
    }
    communications_types {
      ...CommunicationType
    }
  }
`;

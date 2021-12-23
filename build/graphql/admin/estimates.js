"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_GAMES_COMMUNICATIONS_TYPES = exports.ARCHIVE_ESTIMATES_M2M_ENTITIES_BY_PK = exports.GET_ESTIMATES_M2M_ENTITIES = exports.UPDATE_ESTIMATES_M2M_ENTITIES = exports.INSERT_ESTIMATES_M2M_ENTITIES = exports.ARCHIVE_ESTIMATE = exports.UPDATE_ESTIMATE = exports.INSERT_ESTIMATE = exports.GET_ESTIMATES_BY_CLIENT = exports.ESTIMATE_FRAGMENT = exports.ESTIMATE_M2M_ENTITIES_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.ESTIMATE_M2M_ENTITIES_FRAGMENT = client_1.gql `
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
exports.ESTIMATE_FRAGMENT = client_1.gql `
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
exports.GET_ESTIMATES_BY_CLIENT = client_1.gql `
  query getEstimatesByClient($clientId: uuid!) {
    estimates(
      where: { client_id: { _eq: $clientId } }
      order_by: { created_at: desc }
    ) {
      ...Estimate
    }
  }
`;
exports.INSERT_ESTIMATE = client_1.gql `
  mutation insertEstimate($estimate: estimates_insert_input!) {
    insert_estimates_one(object: $estimate) {
      ...Estimate
    }
  }
`;
exports.UPDATE_ESTIMATE = client_1.gql `
  mutation updateEstimate($estimateId: uuid!, $estimate: estimates_set_input!) {
    update_estimates_by_pk(pk_columns: { id: $estimateId }, _set: $estimate) {
      ...Estimate
    }
  }
`;
exports.ARCHIVE_ESTIMATE = client_1.gql `
  mutation archiveEstimate($estimateId: uuid!) {
    update_estimates_by_pk(
      pk_columns: { id: $estimateId }
      _set: { is_archive: true }
    ) {
      ...Estimate
    }
  }
`;
exports.INSERT_ESTIMATES_M2M_ENTITIES = client_1.gql `
  mutation insertEstimateM2mEntity(
    $estimateM2mEntity: estimates_m2m_entities_insert_input!
  ) {
    insert_estimates_m2m_entities_one(object: $estimateM2mEntity) {
      ...EstimateM2mEntity
    }
  }
`;
exports.UPDATE_ESTIMATES_M2M_ENTITIES = client_1.gql `
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
exports.GET_ESTIMATES_M2M_ENTITIES = client_1.gql `
  query getEstimatesM2mEntities($estimateId: uuid!) {
    __typename
    estimates_m2m_entities(where: { estimate_id: { _eq: $estimateId } }) {
      __typename
      ...EstimateM2mEntity
    }
  }
`;
exports.ARCHIVE_ESTIMATES_M2M_ENTITIES_BY_PK = client_1.gql `
  mutation archiveEstimatesM2mEntitiesByPk($estimateM2mEntityId: uuid!) {
    delete_estimates_m2m_entities_by_pk(id: $estimateM2mEntityId) {
      ...EstimateM2mEntity
    }
  }
`;
exports.GET_GAMES_COMMUNICATIONS_TYPES = client_1.gql `
  query getGamesCommunicationsTypes {
    games_types {
      ...GameType
    }
    communications_types {
      ...CommunicationType
    }
  }
`;

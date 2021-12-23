"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARCHIVE_CLIENT_COMMUNICATION = exports.UPDATE_COMMUNICATION = exports.INSERT_COMMUNICATION = exports.GET_COMMUNICATIONS_BY_CLIENT_AND_COMMUNICATION_TYPE = exports.GET_COMMUNICATIONS_BY_CLIENT = exports.COMMUNICATION_MINIMAL_INFOS_FRAGMENT = exports.COMMUNICATION_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.COMMUNICATION_FRAGMENT = client_1.gql `
  fragment Communication on communications {
    id
    name
    date_start
    date_end
    is_active
    is_private
    client_id
    address
    created_at
    type_id
    location
    city
    description
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...CommunicationType
    }
  }
`;
exports.COMMUNICATION_MINIMAL_INFOS_FRAGMENT = client_1.gql `
  fragment CommunnicationMinimalInfos on communications {
    id
    name
    client_id
    is_private
    type {
      name
    }
  }
`;
exports.GET_COMMUNICATIONS_BY_CLIENT = client_1.gql `
  query getCommunicationsByClient($clientId: uuid!) {
    communications(
      where: { client_id: { _eq: $clientId } }
      order_by: { created_at: desc }
    ) {
      ...Communication
    }
  }
`;
exports.GET_COMMUNICATIONS_BY_CLIENT_AND_COMMUNICATION_TYPE = client_1.gql `
  query getCommunicationsByClientAndCommunicationType(
    $clientId: uuid!
    $communicationTypeId: uuid!
  ) {
    communications(
      where: {
        client_id: { _eq: $clientId }
        type_id: { _eq: $communicationTypeId }
        is_archive: { _neq: true }
      }
      order_by: { created_at: desc }
    ) {
      ...Communication
    }
  }
`;
exports.INSERT_COMMUNICATION = client_1.gql `
  mutation insertCommunication($communication: communications_insert_input!) {
    insert_communications_one(object: $communication) {
      ...Communication
    }
  }
`;
exports.UPDATE_COMMUNICATION = client_1.gql `
  mutation updateCommunication(
    $communicationId: uuid!
    $communication: communications_set_input!
  ) {
    __typename
    update_communications_by_pk(
      pk_columns: { id: $communicationId }
      _set: $communication
    ) {
      __typename
      ...Communication
    }
  }
`;
exports.ARCHIVE_CLIENT_COMMUNICATION = client_1.gql `
  mutation archiveCommunication($communicationId: uuid!) {
    __typename
    update_communications_by_pk(
      pk_columns: { id: $communicationId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Communication
    }
  }
`;

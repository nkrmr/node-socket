import { gql } from '@apollo/client';

export const COMMUNICATION_FRAGMENT = gql`
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

export const COMMUNICATION_MINIMAL_INFOS_FRAGMENT = gql`
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

export const GET_COMMUNICATIONS_BY_CLIENT = gql`
  query getCommunicationsByClient($clientId: uuid!) {
    communications(
      where: { client_id: { _eq: $clientId } }
      order_by: { created_at: desc }
    ) {
      ...Communication
    }
  }
`;

export const GET_COMMUNICATIONS_BY_CLIENT_AND_COMMUNICATION_TYPE = gql`
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

export const INSERT_COMMUNICATION = gql`
  mutation insertCommunication($communication: communications_insert_input!) {
    insert_communications_one(object: $communication) {
      ...Communication
    }
  }
`;

export const UPDATE_COMMUNICATION = gql`
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

export const ARCHIVE_CLIENT_COMMUNICATION = gql`
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

import { gql } from '@apollo/client';

export const COMMUNICATION_TYPE_FRAGMENT = gql`
  fragment CommunicationType on communications_types {
    id
    name
    color
    acronym
    radius_price_range
    price
  }
`;

export const GET_COMMUNICATIONS_TYPES = gql`
  query getCommunicationsTypes {
    communications_types(order_by: { name: asc }) {
      ...CommunicationType
    }
  }
`;

export const GET_COMMUNICATION_TYPE_BY_ID = gql`
  query getCommunicationTypeById($communicationTypeId: uuid!) {
    communications_types_by_pk(id: $communicationTypeId) {
      ...CommunicationType
    }
  }
`;

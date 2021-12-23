"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_COMMUNICATION_TYPE_BY_ID = exports.GET_COMMUNICATIONS_TYPES = exports.COMMUNICATION_TYPE_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.COMMUNICATION_TYPE_FRAGMENT = client_1.gql `
  fragment CommunicationType on communications_types {
    id
    name
    color
    acronym
    radius_price_range
    price
  }
`;
exports.GET_COMMUNICATIONS_TYPES = client_1.gql `
  query getCommunicationsTypes {
    communications_types(order_by: { name: asc }) {
      ...CommunicationType
    }
  }
`;
exports.GET_COMMUNICATION_TYPE_BY_ID = client_1.gql `
  query getCommunicationTypeById($communicationTypeId: uuid!) {
    communications_types_by_pk(id: $communicationTypeId) {
      ...CommunicationType
    }
  }
`;

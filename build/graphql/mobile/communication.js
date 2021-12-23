"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_NEARBY_COMMUNICATIONS = exports.NEARBY_COMMUNICATION_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.NEARBY_COMMUNICATION_FRAGMENT = client_1.gql `
  fragment NearbyCommunication on communications {
    ...Communication
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
`;
exports.GET_NEARBY_COMMUNICATIONS = client_1.gql `
  query getNearbyCommunications(
    $location: geography!
    $distance: Float!
    $currentDate: date!
  ) {
    communications(
      where: {
        location: { _st_d_within: { from: $location, distance: $distance } }
        is_active: { _eq: true }
        date_start: { _lte: $currentDate }
        date_end: { _gte: $currentDate }
        is_archive: { _neq: true }
      }
    ) {
      ...NearbyCommunication
    }
  }
`;

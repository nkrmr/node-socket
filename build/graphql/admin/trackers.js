"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_TRACKER = exports.INSERT_TRACKER = exports.GET_TRACKERS = exports.TRACKER_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.TRACKER_FRAGMENT = client_1.gql `
  fragment Tracker on ar_trackers {
    id
    name
    width
    height
    image {
      ...Asset
    }
    qrcode_inside
  }
`;
exports.GET_TRACKERS = client_1.gql `
  query getTrackers($clientId: uuid) {
    ar_trackers(
      order_by: { name: asc }
      where: {
        _or: [
          { client_id: { _eq: $clientId } }
          { client_id: { _is_null: true } }
        ]
      }
    ) {
      ...Tracker
    }
  }
`;
exports.INSERT_TRACKER = client_1.gql `
  mutation insertTracker($object: ar_trackers_insert_input!) {
    insert_ar_trackers_one(object: $object) {
      ...Tracker
    }
  }
`;
exports.UPDATE_TRACKER = client_1.gql `
  mutation updateTracker($id: uuid!, $updates: ar_trackers_set_input!) {
    update_ar_trackers_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Tracker
    }
  }
`;

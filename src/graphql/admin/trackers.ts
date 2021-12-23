import { gql } from '@apollo/client';

export const TRACKER_FRAGMENT = gql`
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

export const GET_TRACKERS = gql`
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

export const INSERT_TRACKER = gql`
  mutation insertTracker($object: ar_trackers_insert_input!) {
    insert_ar_trackers_one(object: $object) {
      ...Tracker
    }
  }
`;

export const UPDATE_TRACKER = gql`
  mutation updateTracker($id: uuid!, $updates: ar_trackers_set_input!) {
    update_ar_trackers_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Tracker
    }
  }
`;

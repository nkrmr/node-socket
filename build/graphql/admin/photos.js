"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_PHOTO = exports.GET_PHOTO_SPECIFICS = exports.INSERT_PHOTO = exports.PHOTO_SPECIFICS_FRAGMENT = exports.PHOTO_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.PHOTO_FRAGMENT = client_1.gql `
  fragment Photo on photos {
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
    type {
      ...CommunicationType
    }
    foreground {
      ...Asset
    }
  }
`;
exports.PHOTO_SPECIFICS_FRAGMENT = client_1.gql `
  fragment PhotoSpecifics on photos {
    id
    foreground_id
    foreground {
      ...Asset
    }
  }
`;
exports.INSERT_PHOTO = client_1.gql `
  mutation insertPhoto($photo: photos_insert_input!) {
    insert_photos_one(object: $photo) {
      ...Photo
    }
  }
`;
exports.GET_PHOTO_SPECIFICS = client_1.gql `
  query getPhotoSpecifics($id: uuid!) {
    photos_by_pk(id: $id) {
      ...PhotoSpecifics
    }
  }
`;
exports.UPDATE_PHOTO = client_1.gql `
  mutation updatePhoto($id: uuid!, $updates: photos_set_input!) {
    update_photos_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Photo
    }
  }
`;

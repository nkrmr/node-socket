import { gql } from '@apollo/client';

export const PHOTO_FRAGMENT = gql`
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

export const PHOTO_SPECIFICS_FRAGMENT = gql`
  fragment PhotoSpecifics on photos {
    id
    foreground_id
    foreground {
      ...Asset
    }
  }
`;

export const INSERT_PHOTO = gql`
  mutation insertPhoto($photo: photos_insert_input!) {
    insert_photos_one(object: $photo) {
      ...Photo
    }
  }
`;

export const GET_PHOTO_SPECIFICS = gql`
  query getPhotoSpecifics($id: uuid!) {
    photos_by_pk(id: $id) {
      ...PhotoSpecifics
    }
  }
`;

export const UPDATE_PHOTO = gql`
  mutation updatePhoto($id: uuid!, $updates: photos_set_input!) {
    update_photos_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Photo
    }
  }
`;

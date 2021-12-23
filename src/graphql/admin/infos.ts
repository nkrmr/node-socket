import { gql } from '@apollo/client';

export const INFO_FRAGMENT = gql`
  fragment Info on infos {
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
    html
    design
    type {
      ...CommunicationType
    }
  }
`;

export const INFO_SPECIFICS_FRAGMENT = gql`
  fragment InfoSpecifics on infos {
    html
    design
    template_id
    template {
      id
      name
      html
    }
  }
`;

export const INSERT_INFO = gql`
  mutation insertInfo($info: infos_insert_input!) {
    insert_infos_one(object: $info) {
      id
      ...Info
    }
  }
`;

export const GET_INFO_SPECIFICS = gql`
  query getInfoSpecifics($id: uuid!) {
    infos_by_pk(id: $id) {
      id
      ...InfoSpecifics
    }
  }
`;

export const UPDATE_INFO = gql`
  mutation updateInfo($id: uuid!, $updates: infos_set_input!) {
    update_infos_by_pk(pk_columns: { id: $id }, _set: $updates) {
      id
      ...Info
    }
  }
`;

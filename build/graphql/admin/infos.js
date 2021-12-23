"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_INFO = exports.GET_INFO_SPECIFICS = exports.INSERT_INFO = exports.INFO_SPECIFICS_FRAGMENT = exports.INFO_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.INFO_FRAGMENT = client_1.gql `
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
exports.INFO_SPECIFICS_FRAGMENT = client_1.gql `
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
exports.INSERT_INFO = client_1.gql `
  mutation insertInfo($info: infos_insert_input!) {
    insert_infos_one(object: $info) {
      id
      ...Info
    }
  }
`;
exports.GET_INFO_SPECIFICS = client_1.gql `
  query getInfoSpecifics($id: uuid!) {
    infos_by_pk(id: $id) {
      id
      ...InfoSpecifics
    }
  }
`;
exports.UPDATE_INFO = client_1.gql `
  mutation updateInfo($id: uuid!, $updates: infos_set_input!) {
    update_infos_by_pk(pk_columns: { id: $id }, _set: $updates) {
      id
      ...Info
    }
  }
`;

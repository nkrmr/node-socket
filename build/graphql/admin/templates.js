"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARCHIVE_TEMPLATE = exports.UPDATE_TEMPLATE = exports.INSERT_TEMPLATE = exports.GET_TEMPLATES_BY_CLIENT = exports.TEMPLATE_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.TEMPLATE_FRAGMENT = client_1.gql `
  fragment Template on templates {
    id
    name
    design
    html
    created_at
    updated_at
    client_id
    is_active
  }
`;
exports.GET_TEMPLATES_BY_CLIENT = client_1.gql `
  query getTemplatesByClient($clientId: uuid!) {
    templates(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: asc }
    ) {
      ...Template
    }
  }
`;
exports.INSERT_TEMPLATE = client_1.gql `
  mutation insertTemplate($template: templates_insert_input!) {
    insert_templates_one(object: $template) {
      ...Template
    }
  }
`;
exports.UPDATE_TEMPLATE = client_1.gql `
  mutation updateTemplate($templateId: uuid!, $updates: templates_set_input!) {
    __typename
    update_templates_by_pk(pk_columns: { id: $templateId }, _set: $updates) {
      __typename
      ...Template
    }
  }
`;
exports.ARCHIVE_TEMPLATE = client_1.gql `
  mutation archiveTemplate($templateId: uuid!) {
    __typename
    update_templates_by_pk(
      pk_columns: { id: $templateId }
      _set: { is_archive: true }
    ) {
      __typename
      ...Template
    }
  }
`;

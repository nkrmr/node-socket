import { gql } from '@apollo/client';

export const TEMPLATE_FRAGMENT = gql`
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

export const GET_TEMPLATES_BY_CLIENT = gql`
  query getTemplatesByClient($clientId: uuid!) {
    templates(
      where: { client_id: { _eq: $clientId }, is_archive: { _neq: true } }
      order_by: { created_at: asc }
    ) {
      ...Template
    }
  }
`;

export const INSERT_TEMPLATE = gql`
  mutation insertTemplate($template: templates_insert_input!) {
    insert_templates_one(object: $template) {
      ...Template
    }
  }
`;

export const UPDATE_TEMPLATE = gql`
  mutation updateTemplate($templateId: uuid!, $updates: templates_set_input!) {
    __typename
    update_templates_by_pk(pk_columns: { id: $templateId }, _set: $updates) {
      __typename
      ...Template
    }
  }
`;

export const ARCHIVE_TEMPLATE = gql`
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

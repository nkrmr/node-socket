import { gql } from '@apollo/client';

export const GET_TEMPLATE_BY_ID = gql`
  query getTemplateById($templateId: uuid!) {
    templates_by_pk(id: $templateId) {
      id
      name
      html
    }
  }
`;

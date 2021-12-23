"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TEMPLATE_BY_ID = void 0;
const client_1 = require("@apollo/client");
exports.GET_TEMPLATE_BY_ID = client_1.gql `
  query getTemplateById($templateId: uuid!) {
    templates_by_pk(id: $templateId) {
      id
      name
      html
    }
  }
`;

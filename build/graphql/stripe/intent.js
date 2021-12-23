"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_STRIPE_INTENT = void 0;
const client_1 = require("@apollo/client");
exports.CREATE_STRIPE_INTENT = client_1.gql `
  mutation createStripeIntent($customerId: String!) {
    create_stripe_intent(customerId: $customerId) {
      client_secret
    }
  }
`;

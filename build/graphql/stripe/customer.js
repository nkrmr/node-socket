"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_STRIPE_CUSTOMER = void 0;
const client_1 = require("@apollo/client");
exports.CREATE_STRIPE_CUSTOMER = client_1.gql `
  mutation createStripeCustomer($name: String!, $email: String!) {
    create_stripe_customer(name: $name, email: $email) {
      stripe_cust_id
    }
  }
`;

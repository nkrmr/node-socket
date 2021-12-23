"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_STRIPE_CUSTOMER_PAYMENT_METHODS = void 0;
const client_1 = require("@apollo/client");
exports.GET_STRIPE_CUSTOMER_PAYMENT_METHODS = client_1.gql `
  query getStripeCustomerPaymentMethods($customer: String!, $type: String!) {
    get_stripe_customer_payment_methods(customer: $customer, type: $type) {
      id
      object
      billing_details {
        address {
          city
          country
          line1
          line2
          postal_code
          state
        }
        email
        name
        phone
      }
      card {
        brand
        country
        exp_month
        exp_year
        fingerprint
        funding
        generated_from
        last4
        wallet
      }
      created
      customer
      livemode
      type
    }
  }
`;

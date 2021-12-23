import { gql } from '@apollo/client';

export const CREATE_STRIPE_CUSTOMER = gql`
  mutation createStripeCustomer($name: String!, $email: String!) {
    create_stripe_customer(name: $name, email: $email) {
      stripe_cust_id
    }
  }
`;

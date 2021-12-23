import { gql } from '@apollo/client';

export const CREATE_STRIPE_INTENT = gql`
  mutation createStripeIntent($customerId: String!) {
    create_stripe_intent(customerId: $customerId) {
      client_secret
    }
  }
`;

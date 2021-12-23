import { gql } from '@apollo/client';

export const NEARBY_COMMUNICATION_FRAGMENT = gql`
  fragment NearbyCommunication on communications {
    ...Communication
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
`;

export const GET_NEARBY_COMMUNICATIONS = gql`
  query getNearbyCommunications(
    $location: geography!
    $distance: Float!
    $currentDate: date!
  ) {
    communications(
      where: {
        location: { _st_d_within: { from: $location, distance: $distance } }
        is_active: { _eq: true }
        date_start: { _lte: $currentDate }
        date_end: { _gte: $currentDate }
        is_archive: { _neq: true }
      }
    ) {
      ...NearbyCommunication
    }
  }
`;

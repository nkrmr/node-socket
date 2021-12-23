import { gql } from '@apollo/client';

export const NEARBY_GAME_FRAGMENT = gql`
  fragment NearbyGameCard on nearby_games {
    id
    name
    date_start
    date_end
    is_active
    client_id
    description
    gtc
    instructions
    address
    radius
    valorization
    with_instant_gains
    with_random_drawings
    with_magic_random_drawings
    frequency
    max_participations
    created_at
    type_id
    location
    city
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    distance
    is_test
    client {
      id
      name
      company
      picture {
        ...Asset
      }
    }
  }
`;

export const NEARBY_COMMUNICATION_FRAGMENT = gql`
  fragment NearbyCommunicationCard on nearby_communications {
    id
    name
    date_start
    date_end
    is_active
    client_id
    address
    created_at
    type_id
    location
    city
    description
    card_image {
      ...Asset
    }
    card_image_background {
      ...Asset
    }
    type {
      ...CommunicationType
    }
    distance
    client {
      id
      name
      picture {
        ...Asset
      }
    }
  }
`;

export const GET_NEARBY_CARDS = gql`
  query getNearbyCards($location: geometry!) {
    get_nearby_games(args: { user_location: $location }) {
      ...NearbyGameCard
    }
    get_nearby_communications(args: { user_location: $location }) {
      ...NearbyCommunicationCard
    }
  }
`;

export const GET_NEARBY_PRIVATE_DECK_CARDS = gql`
  query getNearbyPrivateDeckCards($location: geometry!, $privateDeckId: uuid!) {
    get_nearby_private_deck_games(
      args: { user_location: $location, private_deck_id: $privateDeckId }
    ) {
      ...NearbyGameCard
    }
    get_nearby_private_deck_communications(
      args: { user_location: $location, private_deck_id: $privateDeckId }
    ) {
      ...NearbyCommunicationCard
    }
  }
`;

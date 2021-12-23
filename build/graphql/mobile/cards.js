"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_NEARBY_PRIVATE_DECK_CARDS = exports.GET_NEARBY_CARDS = exports.NEARBY_COMMUNICATION_FRAGMENT = exports.NEARBY_GAME_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.NEARBY_GAME_FRAGMENT = client_1.gql `
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
exports.NEARBY_COMMUNICATION_FRAGMENT = client_1.gql `
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
exports.GET_NEARBY_CARDS = client_1.gql `
  query getNearbyCards($location: geometry!) {
    get_nearby_games(args: { user_location: $location }) {
      ...NearbyGameCard
    }
    get_nearby_communications(args: { user_location: $location }) {
      ...NearbyCommunicationCard
    }
  }
`;
exports.GET_NEARBY_PRIVATE_DECK_CARDS = client_1.gql `
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

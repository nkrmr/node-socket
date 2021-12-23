"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAY_GOODIE = exports.GET_GOODIE_ANIMATIONS = exports.GET_GOODIES = exports.GOODIE_PLAYED_FRAGMENT = exports.GOODIE_M2M_ANIMATION_FRAGMENT = exports.GOODIE_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.GOODIE_FRAGMENT = client_1.gql `
  fragment Goodie on goodies {
    id
    name
    created_at
    client_id
    date_start
    date_end
    is_active
    description
    image {
      ...Asset
    }
  }
`;
exports.GOODIE_M2M_ANIMATION_FRAGMENT = client_1.gql `
  fragment GoodieM2MAnimation on goodies_m2m_animations {
    goodie_id
    animation_id
    animation {
      ...Animation
    }
  }
`;
exports.GOODIE_PLAYED_FRAGMENT = client_1.gql `
  fragment GoodiePlayed on goodies_played {
    id
    goodie_id
    user_id
    played_at
    goodie {
      animations {
        animation {
          ...Animation
        }
      }
    }
  }
`;
exports.GET_GOODIES = client_1.gql `
  query getGoodies($clientId: uuid) {
    goodies(where: { client_id: { _eq: $clientId } }) {
      ...Goodie
      client {
        picture {
          ...Asset
        }
      }
    }
  }
`;
exports.GET_GOODIE_ANIMATIONS = client_1.gql `
  query getGoodieAnimations($id: uuid!) {
    goodies_by_pk(id: $id) {
      id
      animations {
        ...GoodieM2MAnimation
      }
    }
  }
`;
exports.PLAY_GOODIE = client_1.gql `
  mutation playGoodie($goodieId: uuid!, $userId: uuid!) {
    goodiePlayed: insert_goodies_played_one(
      object: { goodie_id: $goodieId, user_id: $userId }
    ) {
      ...GoodiePlayed
    }
  }
`;

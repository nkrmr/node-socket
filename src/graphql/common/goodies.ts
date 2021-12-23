import { gql } from '@apollo/client';

export const GOODIE_FRAGMENT = gql`
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

export const GOODIE_M2M_ANIMATION_FRAGMENT = gql`
  fragment GoodieM2MAnimation on goodies_m2m_animations {
    goodie_id
    animation_id
    animation {
      ...Animation
    }
  }
`;

export const GOODIE_PLAYED_FRAGMENT = gql`
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

export const GET_GOODIES = gql`
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

export const GET_GOODIE_ANIMATIONS = gql`
  query getGoodieAnimations($id: uuid!) {
    goodies_by_pk(id: $id) {
      id
      animations {
        ...GoodieM2MAnimation
      }
    }
  }
`;

export const PLAY_GOODIE = gql`
  mutation playGoodie($goodieId: uuid!, $userId: uuid!) {
    goodiePlayed: insert_goodies_played_one(
      object: { goodie_id: $goodieId, user_id: $userId }
    ) {
      ...GoodiePlayed
    }
  }
`;

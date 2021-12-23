import { gql } from '@apollo/client';

export const ANIMATION_FRAGMENT = gql`
  fragment Animation on animations {
    id
    name
    assets {
      asset {
        ...Asset
      }
      when_won
    }
    tracker {
      ...Tracker
    }
  }
`;

export const AR_SPECIFICS_FRAGMENT = gql`
  fragment ARSpecifics on ar {
    animations {
      ...ArM2MAnimation
    }
  }
`;

export const AR_FRAGMENT = gql`
  fragment AR on ar {
    id
    name
    date_start
    date_end
    is_active
    is_private
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
    keep_cumulated_probability
    type {
      ...GameType
    }
    games_gains {
      ...GamesGains
    }
    ...ARSpecifics
  }
`;

export const AR_M2M_ANIMATION_FRAGMENT = gql`
  fragment ArM2MAnimation on ar_m2m_animations {
    ar_id
    animation_id
    animation {
      ...Animation
    }
  }
`;

export const ANIMATION_M2M_ASSET_FRAGMENT = gql`
  fragment AnimationM2MAsset on animations_m2m_assets {
    animation_id
    asset_id
    when_won
  }
`;

export const GET_AR = gql`
  query getAr($id: uuid!) {
    ar_by_pk(id: $id) {
      ...AR
    }
  }
`;

export const GET_AR_SPECIFICS = gql`
  query getArSpecifics($id: uuid!) {
    ar_by_pk(id: $id) {
      id
      ...ARSpecifics
    }
  }
`;

export const INSERT_AR = gql`
  mutation insertAr($ar: ar_insert_input!) {
    insert_ar_one(object: $ar) {
      ...AR
    }
  }
`;

export const UPDATE_ANIMATION = gql`
  mutation updateAnimation($id: uuid!, $updates: animations_set_input!) {
    update_animations_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Animation
    }
  }
`;

export const INSERT_AR_M2M_ANIMATIONS = gql`
  mutation insertArM2mAnimations(
    $ar_id: uuid!
    $animation: animations_obj_rel_insert_input!
  ) {
    insert_ar_m2m_animations_one(
      object: { ar_id: $ar_id, animation: $animation }
    ) {
      ...ArM2MAnimation
    }
  }
`;

export const DELETE_AR_M2M_ANIMATIONS = gql`
  mutation DeleteArM2mAnimations($animation_id: uuid!, $ar_id: uuid!) {
    delete_ar_m2m_animations_by_pk(animation_id: $animation_id, ar_id: $ar_id) {
      ar_id
      animation_id
    }
  }
`;

export const INSERT_ANIMATIONS_M2M_ASSETS = gql`
  mutation insertAnimationsM2mAssets(
    $objects: [animations_m2m_assets_insert_input!]!
  ) {
    insert_animations_m2m_assets(objects: $objects) {
      returning {
        ...AnimationM2MAsset
      }
    }
  }
`;

export const UPDATE_ANIMATIONS_M2M_ASSETS = gql`
  mutation updateAnimationsM2mAssets(
    $animation_id: uuid!
    $asset_id: uuid!
    $when_won: Boolean!
  ) {
    update_animations_m2m_assets_by_pk(
      pk_columns: { animation_id: $animation_id, asset_id: $asset_id }
      _set: { when_won: $when_won }
    ) {
      ...AnimationM2MAsset
    }
  }
`;

export const DELETE_ANIMATIONS_M2M_ASSETS = gql`
  mutation deleteAnimationsM2mAssets($animation_id: uuid!, $asset_id: uuid!) {
    delete_animations_m2m_assets_by_pk(
      animation_id: $animation_id
      asset_id: $asset_id
    ) {
      animation_id
      asset_id
    }
  }
`;

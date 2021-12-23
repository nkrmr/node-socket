"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_ANIMATIONS_M2M_ASSETS = exports.UPDATE_ANIMATIONS_M2M_ASSETS = exports.INSERT_ANIMATIONS_M2M_ASSETS = exports.DELETE_AR_M2M_ANIMATIONS = exports.INSERT_AR_M2M_ANIMATIONS = exports.UPDATE_ANIMATION = exports.INSERT_AR = exports.GET_AR_SPECIFICS = exports.GET_AR = exports.ANIMATION_M2M_ASSET_FRAGMENT = exports.AR_M2M_ANIMATION_FRAGMENT = exports.AR_FRAGMENT = exports.AR_SPECIFICS_FRAGMENT = exports.ANIMATION_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.ANIMATION_FRAGMENT = client_1.gql `
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
exports.AR_SPECIFICS_FRAGMENT = client_1.gql `
  fragment ARSpecifics on ar {
    animations {
      ...ArM2MAnimation
    }
  }
`;
exports.AR_FRAGMENT = client_1.gql `
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
exports.AR_M2M_ANIMATION_FRAGMENT = client_1.gql `
  fragment ArM2MAnimation on ar_m2m_animations {
    ar_id
    animation_id
    animation {
      ...Animation
    }
  }
`;
exports.ANIMATION_M2M_ASSET_FRAGMENT = client_1.gql `
  fragment AnimationM2MAsset on animations_m2m_assets {
    animation_id
    asset_id
    when_won
  }
`;
exports.GET_AR = client_1.gql `
  query getAr($id: uuid!) {
    ar_by_pk(id: $id) {
      ...AR
    }
  }
`;
exports.GET_AR_SPECIFICS = client_1.gql `
  query getArSpecifics($id: uuid!) {
    ar_by_pk(id: $id) {
      id
      ...ARSpecifics
    }
  }
`;
exports.INSERT_AR = client_1.gql `
  mutation insertAr($ar: ar_insert_input!) {
    insert_ar_one(object: $ar) {
      ...AR
    }
  }
`;
exports.UPDATE_ANIMATION = client_1.gql `
  mutation updateAnimation($id: uuid!, $updates: animations_set_input!) {
    update_animations_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Animation
    }
  }
`;
exports.INSERT_AR_M2M_ANIMATIONS = client_1.gql `
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
exports.DELETE_AR_M2M_ANIMATIONS = client_1.gql `
  mutation DeleteArM2mAnimations($animation_id: uuid!, $ar_id: uuid!) {
    delete_ar_m2m_animations_by_pk(animation_id: $animation_id, ar_id: $ar_id) {
      ar_id
      animation_id
    }
  }
`;
exports.INSERT_ANIMATIONS_M2M_ASSETS = client_1.gql `
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
exports.UPDATE_ANIMATIONS_M2M_ASSETS = client_1.gql `
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
exports.DELETE_ANIMATIONS_M2M_ASSETS = client_1.gql `
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

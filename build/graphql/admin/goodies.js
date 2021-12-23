"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_GOODIES_M2M_ANIMATIONS = exports.INSERT_GOODIES_M2M_ANIMATIONS = exports.ARCHIVE_GOODIE = exports.UPDATE_GOODIE = exports.INSERT_GOODIE = exports.GET_GOODIE = void 0;
const client_1 = require("@apollo/client");
exports.GET_GOODIE = client_1.gql `
  query getGoodie($id: uuid!) {
    goodies_by_pk(id: $id) {
      ...Goodie
    }
  }
`;
exports.INSERT_GOODIE = client_1.gql `
  mutation insertGoodie($goodie: goodies_insert_input!) {
    insert_goodies_one(object: $goodie) {
      ...Goodie
    }
  }
`;
exports.UPDATE_GOODIE = client_1.gql `
  mutation updateGoodie($goodieId: uuid!, $goodie: goodies_set_input!) {
    update_goodies_by_pk(pk_columns: { id: $goodieId }, _set: $goodie) {
      ...Goodie
    }
  }
`;
exports.ARCHIVE_GOODIE = client_1.gql `
  mutation archiveGoodie($goodieId: uuid!) {
    update_goodies_by_pk(
      pk_columns: { id: $goodieId }
      _set: { is_archive: true }
    ) {
      id
      is_archive
    }
  }
`;
exports.INSERT_GOODIES_M2M_ANIMATIONS = client_1.gql `
  mutation insertGoodiesM2mAnimations(
    $goodie_id: uuid!
    $animation: animations_obj_rel_insert_input!
  ) {
    insert_goodies_m2m_animations_one(
      object: { goodie_id: $goodie_id, animation: $animation }
    ) {
      ...GoodieM2MAnimation
    }
  }
`;
exports.DELETE_GOODIES_M2M_ANIMATIONS = client_1.gql `
  mutation DeleteGoodiesM2mAnimations($goodie_id: uuid!, $animation_id: uuid!) {
    delete_goodies_m2m_animations_by_pk(
      goodie_id: $goodie_id
      animation_id: $animation_id
    ) {
      goodie_id
      animation_id
    }
  }
`;

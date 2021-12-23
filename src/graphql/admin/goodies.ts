import { gql } from '@apollo/client';

export const GET_GOODIE = gql`
  query getGoodie($id: uuid!) {
    goodies_by_pk(id: $id) {
      ...Goodie
    }
  }
`;

export const INSERT_GOODIE = gql`
  mutation insertGoodie($goodie: goodies_insert_input!) {
    insert_goodies_one(object: $goodie) {
      ...Goodie
    }
  }
`;

export const UPDATE_GOODIE = gql`
  mutation updateGoodie($goodieId: uuid!, $goodie: goodies_set_input!) {
    update_goodies_by_pk(pk_columns: { id: $goodieId }, _set: $goodie) {
      ...Goodie
    }
  }
`;

export const ARCHIVE_GOODIE = gql`
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

export const INSERT_GOODIES_M2M_ANIMATIONS = gql`
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

export const DELETE_GOODIES_M2M_ANIMATIONS = gql`
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

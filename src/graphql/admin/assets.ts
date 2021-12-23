import { gql } from '@apollo/client';

export const ASSET_FRAGMENT = gql`
  fragment Asset on assets {
    id
    type
    path
    name
    client_id
    user_id
    scaleX
    scaleY
    scaleZ
    resources
  }
`;

export const ASSET_RESOURCES_FRAGMENT = gql`
  fragment AssetResources on assets {
    id
    resources
  }
`;

export const GET_ASSET_BY_ID = gql`
  query getAssetById($id: uuid!) {
    assets_by_pk(id: $id) {
      ...Asset
    }
  }
`;

export const GET_ASSET_BY_PATH = gql`
  query getAssetByPath($clientId: uuid!, $path: String!) {
    assets(where: { client_id: { _eq: $clientId }, path: { _eq: $path } }) {
      ...Asset
    }
  }
`;

export const GET_ASSETS = gql`
  query getAssets($type: assets_types_enum, $clientId: uuid) {
    assets(
      order_by: { name: asc }
      where: {
        type: { _eq: $type }
        _or: [
          { client_id: { _eq: $clientId } }
          { client_id: { _is_null: true }, user_id: { _is_null: true } }
        ]
      }
    ) {
      ...Asset
    }
  }
`;

export const INSERT_ASSET = gql`
  mutation insertAsset($object: assets_insert_input!) {
    insert_assets_one(object: $object) {
      ...Asset
    }
  }
`;

export const UPDATE_ASSET = gql`
  mutation updateAsset($id: uuid!, $updates: assets_set_input!) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Asset
    }
  }
`;

export const ADD_RESOURCE_TO_ASSET = gql`
  mutation addResourceToAsset($id: uuid!, $resource: jsonb!) {
    update_assets_by_pk(
      pk_columns: { id: $id }
      _append: { resources: $resource }
    ) {
      __typename
      ...AssetResources
    }
  }
`;

export const DELETE_RESOURCE_FROM_ASSET = gql`
  mutation deleteResourceFromAsset($id: uuid!, $resource: String!) {
    update_assets_by_pk(
      pk_columns: { id: $id }
      _delete_key: { resources: $resource }
    ) {
      __typename
      ...AssetResources
    }
  }
`;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_RESOURCE_FROM_ASSET = exports.ADD_RESOURCE_TO_ASSET = exports.UPDATE_ASSET = exports.INSERT_ASSET = exports.GET_ASSETS = exports.GET_ASSET_BY_PATH = exports.GET_ASSET_BY_ID = exports.ASSET_RESOURCES_FRAGMENT = exports.ASSET_FRAGMENT = void 0;
const client_1 = require("@apollo/client");
exports.ASSET_FRAGMENT = client_1.gql `
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
exports.ASSET_RESOURCES_FRAGMENT = client_1.gql `
  fragment AssetResources on assets {
    id
    resources
  }
`;
exports.GET_ASSET_BY_ID = client_1.gql `
  query getAssetById($id: uuid!) {
    assets_by_pk(id: $id) {
      ...Asset
    }
  }
`;
exports.GET_ASSET_BY_PATH = client_1.gql `
  query getAssetByPath($clientId: uuid!, $path: String!) {
    assets(where: { client_id: { _eq: $clientId }, path: { _eq: $path } }) {
      ...Asset
    }
  }
`;
exports.GET_ASSETS = client_1.gql `
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
exports.INSERT_ASSET = client_1.gql `
  mutation insertAsset($object: assets_insert_input!) {
    insert_assets_one(object: $object) {
      ...Asset
    }
  }
`;
exports.UPDATE_ASSET = client_1.gql `
  mutation updateAsset($id: uuid!, $updates: assets_set_input!) {
    update_assets_by_pk(pk_columns: { id: $id }, _set: $updates) {
      ...Asset
    }
  }
`;
exports.ADD_RESOURCE_TO_ASSET = client_1.gql `
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
exports.DELETE_RESOURCE_FROM_ASSET = client_1.gql `
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

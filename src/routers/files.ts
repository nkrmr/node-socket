import express from 'express';
import fileUpload from 'express-fileupload';
import { exec } from 'child_process';
import { promises as fs } from 'fs';

import { authenticate } from '../middlewares/authenticate';
import { Sdk } from '../types/auth-models';
import { AssetsTypesEnum } from '../types/common';
import { ENV_VARS } from '../utils/authUtils';
import {
  addSuffix,
  insertQRCodeInsideImage,
  pathExists,
} from '../utils/fileUtils';

export const getFilesRouter = (graphQLSdk: Sdk) => {
  const filesRouter = express.Router();

  filesRouter.use(
    fileUpload({
      createParentPath: true,
      abortOnLimit: true,
      limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB
    }),
  );
  filesRouter.use(authenticate);

  filesRouter.post('/upload/:type', async (req, res) => {
    try {
      if (!req.files || !req.files.file)
        return res.status(400).send('No file uploaded');

      // Name of the input field (i.e. "file") to retrieve the uploaded file
      const { file } = req.files;
      const { type } = req.params;
      const { assetId, isUser, qrcodeInside } = req.body;

      if (Array.isArray(file))
        return res.status(400).send('Should be a single file.');
      let userPath = `/${req.userId}`;
      let filePath = `/${file.name}`;

      if (type === 'resource') {
        if (!assetId)
          return res
            .status(400)
            .send("Asset's id is needed when uploading resources.");

        const { assets_by_pk: asset } = await graphQLSdk.getAssetById({
          id: assetId,
        });
        if (!asset) return res.status(400).send('Wrong assetId');

        const userId = asset.client_id || asset.user_id;
        userPath = `${userId ? `/${userId}` : ''}`;

        const directory = asset.path.split('/');
        directory.pop();
        filePath = `${directory.join('/')}/${file.name}`;
      }

      const path = `${ENV_VARS.FILE_UPLOAD_DIR}${userPath}${filePath}`;
      const alreadyExists = await pathExists(path);
      if (alreadyExists && file.name.split('.')[0] !== 'profile-picture') {
        const { assets } = await graphQLSdk.getAssetByPath({
          clientId: req.userId,
          path: filePath,
        });
        if (assets.length === 0) throw new Error('internal_error');

        return res
          .status(400)
          .json({ error: 'alreadyExists', asset: assets[0] });
      }

      file.mv(path);

      let compressCommand: string | undefined;
      const compressedPath = addSuffix(path, '-compressed');
      if (file.mimetype.split('/')[0] === 'image' && file.size > 1024 * 1024)
        compressCommand = `magick '${path}' -strip -gaussian-blur 0.05 -quality 80% -units pixelsperinch -density 150x150 -resize 'x1200>' '${compressedPath}'`;
      else if (
        file.mimetype.split('/')[0] === 'video' &&
        file.size > 5 * 1024 * 1024
      )
        compressCommand = `ffmpeg -i '${path}' -c:v libx264 -crf 28 -preset veryslow -c:a copy '${compressedPath}'`;
      if (compressCommand)
        exec(compressCommand, (error, stdout, stderr) => {
          if (error || stderr !== '') console.error(error || stderr);
          else fs.rename(compressedPath, path);
        });

      if (alreadyExists) return res.json(null);

      if (type === 'resource') {
        const response = await graphQLSdk.addResourceToAsset({
          id: assetId,
          resource: filePath,
        });
        if (!response.update_assets_by_pk) throw Error('internal_error');
        return res.send(response.update_assets_by_pk);
      }

      const response = await graphQLSdk.insertAsset({
        object: {
          [isUser ? 'user_id' : 'client_id']: req.userId,
          name: file.name,
          path: filePath,
          type: type as AssetsTypesEnum,
        },
      });
      if (!response.insert_assets_one) throw Error('internal_error');

      if (type === 'image' && qrcodeInside)
        await insertQRCodeInsideImage(response.insert_assets_one.id, path);

      return res.send(response.insert_assets_one);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  filesRouter.post('/delete', async (req, res) => {
    try {
      const { name, assetId, isResource } = req.body;
      if (!name) return res.status(400).send("File's name is needed");

      let userPath = `/${req.userId}`;

      if (assetId && isResource) {
        const { assets_by_pk: asset } = await graphQLSdk.getAssetById({
          id: assetId,
        });
        if (!asset) return res.status(400).send('Wrong assetId');

        const userId = asset.client_id || asset.user_id;
        userPath = userId ? `/${userId}` : '';
      }

      const path = `${ENV_VARS.FILE_UPLOAD_DIR}${userPath}${name}`;
      fs.rm(path).catch(() => {}); // eslint-disable-line @typescript-eslint/no-empty-function

      if (assetId && isResource) {
        // TODO: Secure this request doing it as client
        const response = await graphQLSdk.deleteResourceFromAsset({
          id: assetId,
          resource: name,
        });
        if (!response.update_assets_by_pk) throw Error();
        return res.json(response.update_assets_by_pk);
      }

      return res.send({ status: 'removed' });
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  filesRouter.post('/insert-qrcode', async (req, res) => {
    try {
      const { assetId } = req.body;
      if (!assetId) return res.status(400).json('assetId missing !');

      const { assets_by_pk: asset } = await graphQLSdk.getAssetById({
        id: assetId,
      });
      if (!asset || asset.user_id) return res.status(400).json('Wrong assetId');

      let { path } = asset;

      if (asset.client_id) {
        if (asset.client_id !== req.userId) {
          const { clients_by_pk: client } = await graphQLSdk.getClientById({
            id: asset.client_id,
          });
          if (!client || client.reseller_id !== req.userId)
            return res.status(403).json(null);
        }
        path = `/${asset.client_id}${path}`;
      }

      path = `${ENV_VARS.FILE_UPLOAD_DIR}${path}`;

      await insertQRCodeInsideImage(assetId, path);

      return res.json(null);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  return filesRouter;
};

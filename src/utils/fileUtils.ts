import { exec } from 'child_process';
import { promises as fs } from 'fs';
import sizeOf from 'image-size';
import QRCode from 'qrcode';

export const pathExists = async (path: string) =>
  fs
    .access(path)
    .then(() => true)
    .catch(() => false);

export const removeExtension = (path: string) => {
  const splitPath = path.split('.');
  splitPath.pop();
  return splitPath.join('.');
};

export const addSuffix = (path: string, suffix: string) => {
  const splitPath = path.split('.');
  splitPath[splitPath.length - 2] += suffix;
  return splitPath.join('.');
};

export const insertQRCodeInsideImage = (id: string, path: string) =>
  new Promise<void>((resolve, reject) => {
    const qrcodeInsidePath = addSuffix(path, '_qrcode_inside');
    pathExists(qrcodeInsidePath).then(exists => {
      if (exists) resolve();
      else {
        const { width, height } = sizeOf(path);
        const qrcodeWidth = width && width / 4 > 76 ? width / 4 : 76;
        const qrcodeHeight = height && height / 4 > 76 ? height / 4 : 76;
        const qrcodePath = `${removeExtension(path)}_qrcode.png`;

        QRCode.toFile(qrcodePath, id, { scale: 16 }).then(() => {
          exec(
            `magick composite -gravity SouthWest -geometry ${qrcodeWidth}x${qrcodeHeight}+0+0 '${qrcodePath}' '${path}' '${qrcodeInsidePath}'`,
            (error, stdout, stderr) => {
              if (error || stderr !== '') reject(error || stderr);
              else resolve();
              fs.rm(qrcodePath);
            },
          );
        });
      }
    });
  });

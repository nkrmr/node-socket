"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertQRCodeInsideImage = exports.addSuffix = exports.removeExtension = exports.pathExists = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const image_size_1 = __importDefault(require("image-size"));
const qrcode_1 = __importDefault(require("qrcode"));
const pathExists = async (path) => fs_1.promises
    .access(path)
    .then(() => true)
    .catch(() => false);
exports.pathExists = pathExists;
const removeExtension = (path) => {
    const splitPath = path.split('.');
    splitPath.pop();
    return splitPath.join('.');
};
exports.removeExtension = removeExtension;
const addSuffix = (path, suffix) => {
    const splitPath = path.split('.');
    splitPath[splitPath.length - 2] += suffix;
    return splitPath.join('.');
};
exports.addSuffix = addSuffix;
const insertQRCodeInsideImage = (id, path) => new Promise((resolve, reject) => {
    const qrcodeInsidePath = exports.addSuffix(path, '_qrcode_inside');
    exports.pathExists(qrcodeInsidePath).then(exists => {
        if (exists)
            resolve();
        else {
            const { width, height } = image_size_1.default(path);
            const qrcodeWidth = width && width / 4 > 76 ? width / 4 : 76;
            const qrcodeHeight = height && height / 4 > 76 ? height / 4 : 76;
            const qrcodePath = `${exports.removeExtension(path)}_qrcode.png`;
            qrcode_1.default.toFile(qrcodePath, id, { scale: 16 }).then(() => {
                child_process_1.exec(`magick composite -gravity SouthWest -geometry ${qrcodeWidth}x${qrcodeHeight}+0+0 '${qrcodePath}' '${path}' '${qrcodeInsidePath}'`, (error, stdout, stderr) => {
                    if (error || stderr !== '')
                        reject(error || stderr);
                    else
                        resolve();
                    fs_1.promises.rm(qrcodePath);
                });
            });
        }
    });
});
exports.insertQRCodeInsideImage = insertQRCodeInsideImage;

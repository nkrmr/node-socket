"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStartDateOfFrequency = exports.fetchJson = void 0;
const fetchJson = (url, method, body, authToken, timeout = 10000) => {
    const controller = new AbortController();
    const headers = ['POST', 'PATCH', 'PUT'].includes(method)
        ? {
            Accept: 'application/json',
            'Content-Type': body instanceof FormData ? 'multipart/form-data' : 'application/json',
        }
        : {};
    if (authToken)
        headers.Authorization = `Bearer ${authToken}`;
    const options = {
        method,
        body: body instanceof FormData ? body : JSON.stringify(body),
        headers,
        signal: controller.signal,
    };
    const promise = fetch(url, options);
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    return promise
        .then(async (response) => {
        clearTimeout(timeoutId);
        const json = await response.json();
        return response.status < 300 ? json : Promise.reject(json);
    })
        .catch(error => {
        clearTimeout(timeoutId);
        return Promise.reject(error);
    });
};
exports.fetchJson = fetchJson;
__exportStar(require("./types/common"), exports);
__exportStar(require("./types/models"), exports);
__exportStar(require("./yup-schemas"), exports);
var sharedUtils_1 = require("./utils/sharedUtils");
Object.defineProperty(exports, "getStartDateOfFrequency", { enumerable: true, get: function () { return sharedUtils_1.getStartDateOfFrequency; } });

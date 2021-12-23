"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authUtils_1 = require("../utils/authUtils");
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        authUtils_1.verifyToken(token)
            .then(payload => {
            req.userId =
                payload['https://hasura.io/jwt/claims']['x-hasura-user-id'];
            req.userRole =
                payload['https://hasura.io/jwt/claims']['x-hasura-default-role'];
            next();
        })
            .catch(err => res.status(403).json(err));
    }
    else {
        res.status(401).json('Authentication header missing');
    }
};
exports.authenticate = authenticate;

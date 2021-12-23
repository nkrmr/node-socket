import { RequestHandler } from 'express';

import { verifyToken } from '../utils/authUtils';

export const authenticate: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    verifyToken(token)
      .then(payload => {
        req.userId =
          payload['https://hasura.io/jwt/claims']['x-hasura-user-id'];
        req.userRole =
          payload['https://hasura.io/jwt/claims']['x-hasura-default-role'];
        next();
      })
      .catch(err => res.status(403).json(err));
  } else {
    res.status(401).json('Authentication header missing');
  }
};

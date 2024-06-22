import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzFlMmM3MGZhNzFmNTM3NDdkOTJjNSIsImlhdCI6MTcxODg4NjYxNX0.TpQ4f63LbxcTA2HN5mQU2PSjiGOxgrG-3csGCw5EFjc"
  // console.log(token);
  if (!token) return next(errorHandler(401, 'Unauthorized'));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));
    req.user = user;
    next();
  });
};

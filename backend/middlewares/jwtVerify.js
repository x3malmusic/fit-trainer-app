import jwt from 'jsonwebtoken'
import { asyncHandler } from "./async";

export const verifyToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers;
  const token = authHeader.authorization && authHeader.authorization.split(" ")[1];
    if (!token) {
      next()
      return
    }
    await jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) next(err)

      req.user = { email: user.email };
      next();
    });
});
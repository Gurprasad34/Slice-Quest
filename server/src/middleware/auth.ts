import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

interface AuthRequest extends Request {
  user?: JwtPayload; // Explicitly define the user property
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Access token required' });
  }

  const token = authHeader.split(' ')[1];
  const secretKey = process.env.JWT_SECRET_KEY;

  if (!secretKey) {
    return res.status(500).json({ message: 'Missing JWT secret key' });
  }

  try {
    const user = jwt.verify(token, secretKey) as JwtPayload;
    (req as AuthRequest).user = user;
    console.log('Authenticated User:', req.user);
    return next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
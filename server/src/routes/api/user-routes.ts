import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';
import { authenticateToken } from '../../middleware/auth.js';
import  jwt from "jsonwebtoken";
console.log('✅ userRouter is being loaded');

const router = express.Router();

// Extend Express Request to include user from JWT
interface AuthRequest extends Request {
  user?: { id: number; username: string };
}

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
  console.log('✅ GET /api/users route was hit');
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    return res.json(users);
  } catch (error: any) {
    console.error('❌ Error fetching users:', error);
    return res.status(500).json({ message: error.message });
  }
});

// GET /users/:id - Get a user by id (PROTECTED)
router.get('/:id', authenticateToken, async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  console.log('Decoded JWT user:', authReq.user);
  console.log('Requested User ID:', req.params.id);

  if (!authReq.user) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const { id } = req.params;

  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (parseInt(id) !== authReq.user.id) {  
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    return res.json(user);
  } catch (error: any) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ message: error.message });
  }
});

// POST /users - Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({ username, email, password });
    const secretKey = process.env.JWT_SECRET_KEY || '';

    const token = jwt.sign(newUser.get({plain:true}), secretKey, { expiresIn: '1h' });
  
  
    return res.status(201).json({newUser,token});
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
});

// PUT /users/:id - Update a user by id (PROTECTED)
router.put('/:id', authenticateToken, async (req: Request, res: Response) => {
  const authReq = req as AuthRequest; // Fix typing
  if (!authReq.user) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.id !== authReq.user.id) {  
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    user.username = username;
    user.password = password;
    await user.save();

    return res.json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
});

// DELETE /users/:id - Delete a user by id (PROTECTED)
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
  const authReq = req as AuthRequest; // Fix typing
  if (!authReq.user) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.id !== authReq.user.id) {  
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    await user.destroy();
    return res.json({ message: 'User deleted' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

export { router as userRouter };
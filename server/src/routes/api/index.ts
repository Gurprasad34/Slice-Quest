import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { pizzaRouter } from './pizza-routes.js';

const router = Router();

console.log('✅ Registering API routes...');

// Test route to confirm API mounting
router.get('/test', (_req, res) => {
  console.log('✅ /api/test route was hit');
  res.json({ message: 'Test route works!' });
});

router.use('/users', userRouter);
router.use('/pizza', pizzaRouter);

console.log('✅ /api routes successfully registered.');

export default router;
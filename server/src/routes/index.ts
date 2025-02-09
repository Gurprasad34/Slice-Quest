import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { pizzaRouter } from './api/pizza-routes.js';
// import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', apiRoutes); //removed authenticateToken for testing (do we even want authentication on /api/pizza-types or /api/pizza-shops? or only on the profile page after login)


router.use('/api', pizzaRouter);

export default router;

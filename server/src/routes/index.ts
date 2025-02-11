import { Router } from 'express';
import { userRouter } from './api/user-routes.js';
import { authRouter } from './auth-routes.js';
import { pizzaRouter } from './api/pizza-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/pizza', pizzaRouter);

export default router;
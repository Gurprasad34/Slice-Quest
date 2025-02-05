import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { pizzaRouter } from './pizza-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/pizza', pizzaRouter)




export default router;

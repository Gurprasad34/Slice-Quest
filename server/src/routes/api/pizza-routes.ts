import express from 'express';
import type { Request, Response } from 'express';
import { PizzaShop, PizzaType } from '../../models/index.js';

const router = express.Router();

// GET /pizza-shops - Get all pizza shops
router.get('/pizza-shops', async (_req: Request, res: Response) => {
try {
    const pizzaShops = await PizzaShop.findAll();
    res.json(pizzaShops);
} catch (error: any) {
    res.status(500).json({ message: undefined });
}
});

// GET /pizza-types - Get all pizza types
router.get('/pizza-types', async (_req: Request, res: Response) => {
try {
    const pizzaTypes = await PizzaType.findAll();
    res.json(pizzaTypes);
} catch (error: any) {
    res.status(500).json({ message: error.message });
}
});

export { router as pizzaRouter };
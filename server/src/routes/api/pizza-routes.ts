import express from 'express';
import type { Request, Response } from 'express';
import { PizzaShop, PizzaType } from '../../models/index.js';

const router = express.Router();

// GET /pizza-shops - Get all pizza shops OR filter by pizza type
router.get('/pizza-shops', async (req: Request, res: Response): Promise<Response> => {
  try {
    const { type } = req.query;
    console.log(`Fetching pizza shops for type: ${type}`);

    let pizzaShops;
    if (type) {
      pizzaShops = await PizzaShop.findAll({
        include: [
          {
            model: PizzaType,
            where: { pizzaType: type },
          },
        ],
      });
    } else {
      pizzaShops = await PizzaShop.findAll();
    }

    if (!pizzaShops || pizzaShops.length === 0) {
      return res.status(404).json({ message: `No pizza shops found for type: ${type}` });
    }

    return res.json(pizzaShops);
  } catch (error: any) {
    console.error('❌ Error fetching pizza shops:', error.message);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// GET /pizza-types - Get all pizza types
router.get('/pizza-types', async (_req: Request, res: Response): Promise<Response> => {
  try {
    const pizzaTypes = await PizzaType.findAll();
    return res.json(pizzaTypes);
  } catch (error: any) {
    console.error('❌ Error fetching pizza types:', error.message);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

export { router as pizzaRouter };
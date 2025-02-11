import express from 'express';
import type { Request, Response } from 'express';
import { Op } from 'sequelize';
import { PizzaShop, PizzaType } from '../../models/index.js';

const router = express.Router();

// ✅ FIXED: `/pizza-shops` now correctly uses `req.query`
router.get('/pizza-shops', async (req: Request, res: Response): Promise<Response> => {
  console.log("🚀 Incoming request to /pizza-shops");
  console.log("Query params:", req.query);

  try {
    const { type } = req.query;

    let pizzaShops;
    if (type) {
      console.log(`🔍 Searching for pizza shops with type: ${type}`);
      pizzaShops = await PizzaShop.findAll({
        include: [
          {
            model: PizzaType,
            where: {
              pizzaType: {
                [Op.iLike]: `%${type}%`,
              },
            },
          },
        ],
      });
    } else {
      console.log("📋 Fetching all pizza shops");
      pizzaShops = await PizzaShop.findAll();
    }

    if (!pizzaShops || pizzaShops.length === 0) {
      console.log("❌ No pizza shops found");
      return res.status(404).json({ message: `No pizza shops found for type: ${type}` });
    }

    console.log(`✅ Found ${pizzaShops.length} pizza shops`);
    return res.json(pizzaShops);
  } catch (error: any) {
    console.error('❌ Error fetching pizza shops:', error.message);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// ✅ GET /pizza-types - Fetch all pizza types
router.get('/pizza-types', async (_req: Request, res: Response): Promise<Response> => {
  console.log("🚀 Incoming request to /pizza-types");

  try {
    const pizzaTypes = await PizzaType.findAll();
    return res.json(pizzaTypes);
  } catch (error: any) {
    console.error('❌ Error fetching pizza types:', error.message);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

export { router as pizzaRouter };

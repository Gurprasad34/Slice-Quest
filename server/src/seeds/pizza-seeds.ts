import { PizzaShop, PizzaType } from '../models/index.js';

export const seedPizzaData = async () => {
  // Seed Pizza Shops
const pizzaShops = await PizzaShop.bulkCreate(
    [
    { name: "Tony's Pizzeria", description: 'Classic Italian pizza with fresh ingredients.' },
    { name: 'New York Slice', description: 'Famous for its large, foldable slices.' },
    { name: 'Firestone Pizza', description: 'Wood-fired pizzas with a crispy crust.' },
    ],
    { returning: true }
);

  // Seed Pizza Types, linking them to the seeded pizza shops
await PizzaType.bulkCreate(
    [
    { pizzaShopId: pizzaShops[0].id, pizzaType: 'Margherita', description: 'Tomato, mozzarella, basil.' },
    { pizzaShopId: pizzaShops[0].id, pizzaType: 'Pepperoni', description: 'Spicy pepperoni with mozzarella.' },
    { pizzaShopId: pizzaShops[1].id, pizzaType: 'Buffalo Chicken', description: 'Chicken, buffalo sauce, ranch drizzle.' },
    { pizzaShopId: pizzaShops[1].id, pizzaType: 'BBQ Chicken', description: 'Grilled chicken, BBQ sauce, red onions.' },
    { pizzaShopId: pizzaShops[2].id, pizzaType: 'Truffle Mushroom', description: 'Mushrooms, truffle oil, ricotta cheese.' },
    { pizzaShopId: pizzaShops[2].id, pizzaType: 'Meat Lovers', description: 'Pepperoni, sausage, bacon, ham.' },
    ],
    { individualHooks: true }
);
};
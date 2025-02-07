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
      { pizzaShopId: pizzaShops[0].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.', imageUrl: "/images/Gemini_Generated_Image_1lkrzw1lkrzw1lkr.jpeg" },
      { pizzaShopId: pizzaShops[0].id, pizzaType: 'Meat Lovers', description: 'Pepperoni, sausage, bacon, ham.', imageUrl: '/images/Gemini_Generated_Image_3l4f0g3l4f0g3l4f.jpeg' },
      { pizzaShopId: pizzaShops[0].id, pizzaType: 'Margherita', description: 'Tomato, mozzarella, basil.', imageUrl: '/images/Gemini_Generated_Image_3hf9h73hf9h73hf9.jpeg' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Buffalo Chicken', description: 'Chicken, buffalo sauce, ranch drizzle.', imageUrl: '/images/Gemini_Generated_Image_o30zmvo30zmvo30z.jpeg' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Hawaiian', description: 'Ham, pineapple, mozzarella.', imageUrl: '/images/Gemini_Generated_Image_99biqt99biqt99bi.jpeg' },
      { pizzaShopId: pizzaShops[2].id, pizzaType: 'Vodka', description: 'Vodka sauce, mozzarella, parmesan.', imageUrl: '/images/Gemini_Generated_Image_5ugrnt5ugrnt5ugr.jpeg' },
    ],
    { individualHooks: true }
  );
};
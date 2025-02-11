import { PizzaShop, PizzaType } from '../models/index.js';

export const seedPizzaData = async () => {
  // Seed Pizza Shops
  const pizzaShops = await PizzaShop.bulkCreate(
    [
      { name: "Bella Pizza", description: 'A family-friendly pizzeria with classic flavors.', address: '1234 Broadway, New York, NY 10001', phone: '(212) 555-1234', addedBy: 'Gurprasad' },
      { name: "Tony's Pizzeria", description: 'A neighborhood favorite with a variety of delicious pies.', address: '2345 5th Ave, New York, NY 10010', phone: '(212) 555-2345', addedBy: 'Ricardo' },
      { name: "Slice of Heaven", description: 'Where every slice is a little piece of heaven.', address: '3456 8th Ave, New York, NY 10011', phone: '(212) 555-3456', addedBy: 'Saif' },
      { name: "Grand Pizzeria", description: 'Wood-fired pizzas with a rustic taste.', address: '4567 Park Ave, New York, NY 10012', phone: '(212) 555-4567', addedBy: 'Bryan' },
      { name: "Mama’s Pizza", description: 'Serving up fresh, homemade pizza for generations.', address: '5678 Lexington Ave, New York, NY 10016', phone: '(212) 555-5678', addedBy: 'Gurprasad' },
      { name: "Pizzeria Roma", description: 'Authentic Italian pizzas with a modern twist.', address: '6789 7th Ave, New York, NY 10018', phone: '(212) 555-6789', addedBy: 'Ricardo' },
      { name: "Vino & Pizza", description: 'Pizza and wine, the perfect pair.', address: '7890 Madison Ave, New York, NY 10022', phone: '(212) 555-7890', addedBy: 'Saif' },
      { name: "Big City Pizza", description: 'New York-style pizza with a big city flavor.', address: '8901 2nd Ave, New York, NY 10028', phone: '(212) 555-8901', addedBy: 'Bryan' },
      { name: "The Pizzeria", description: 'Traditional pies with fresh ingredients.', address: '9012 3rd Ave, New York, NY 10029', phone: '(212) 555-9012', addedBy: 'Gurprasad' },
      { name: "Little Italy Pizzeria", description: 'Classic pizzeria with old-school recipes.', address: '10123 Grand St, New York, NY 10002', phone: '(212) 555-0123', addedBy: 'Ricardo' },
      { name: "Giovanni’s Pizza", description: 'Neapolitan-style pizzas with a focus on quality.', address: '11134 Bowery, New York, NY 10013', phone: '(212) 555-1234', addedBy: 'Saif' },
      { name: "Savory Pies", description: 'A selection of savory, mouthwatering pies for every taste.', address: '12245 Bleecker St, New York, NY 10012', phone: '(212) 555-2345', addedBy: 'Bryan' },
    ],
    { returning: true }
  );

  // Seed Pizza Types, linking them to the seeded pizza shops
  await PizzaType.bulkCreate(
    [
      // Bella Pizza
      { pizzaShopId: pizzaShops[0].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[0].id, pizzaType: 'Margherita', description: 'Tomato, mozzarella, basil.' },
      { pizzaShopId: pizzaShops[0].id, pizzaType: 'Hawaiian', description: 'Ham, pineapple, mozzarella.' },
      
      // Tony's Pizzeria
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Meat Lovers', description: 'Pepperoni, sausage, bacon, ham.' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Buffalo Chicken', description: 'Chicken, buffalo sauce, ranch drizzle.' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Margherita', description: 'Tomato, mozzarella, basil.' },

      // Slice of Heaven
      { pizzaShopId: pizzaShops[2].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[2].id, pizzaType: 'Meat Lovers', description: 'Pepperoni, sausage, bacon, ham.' },
      { pizzaShopId: pizzaShops[2].id, pizzaType: 'Hawaiian', description: 'Ham, pineapple, mozzarella.' },

      // Grand Pizzeria
      { pizzaShopId: pizzaShops[3].id, pizzaType: 'Margherita', description: 'Tomato, mozzarella, basil.' },
      { pizzaShopId: pizzaShops[3].id, pizzaType: 'Buffalo Chicken', description: 'Chicken, buffalo sauce, ranch drizzle.' },
      { pizzaShopId: pizzaShops[3].id, pizzaType: 'Vodka', description: 'Vodka sauce, mozzarella, parmesan.' },

      // Mama’s Pizza
      { pizzaShopId: pizzaShops[4].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[4].id, pizzaType: 'Meat Lovers', description: 'Pepperoni, sausage, bacon, ham.' },
      { pizzaShopId: pizzaShops[4].id, pizzaType: 'Buffalo Chicken', description: 'Chicken, buffalo sauce, ranch drizzle.' },

      // Pizzeria Roma
      { pizzaShopId: pizzaShops[5].id, pizzaType: 'Margherita', description: 'Tomato, mozzarella, basil.' },
      { pizzaShopId: pizzaShops[5].id, pizzaType: 'Vodka', description: 'Vodka sauce, mozzarella, parmesan.' },
      { pizzaShopId: pizzaShops[5].id, pizzaType: 'Hawaiian', description: 'Ham, pineapple, mozzarella.' },

      // Vino & Pizza
      { pizzaShopId: pizzaShops[6].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[6].id, pizzaType: 'Meat Lovers', description: 'Pepperoni, sausage, bacon, ham.' },
      { pizzaShopId: pizzaShops[6].id, pizzaType: 'Buffalo Chicken', description: 'Chicken, buffalo sauce, ranch drizzle.' },

      // Big City Pizza
      { pizzaShopId: pizzaShops[7].id, pizzaType: 'Margherita', description: 'Tomato, mozzarella, basil.' },
      { pizzaShopId: pizzaShops[7].id, pizzaType: 'Buffalo Chicken', description: 'Chicken, buffalo sauce, ranch drizzle.' },
      { pizzaShopId: pizzaShops[7].id, pizzaType: 'Vodka', description: 'Vodka sauce, mozzarella, parmesan.' },

      // The Pizzeria
      { pizzaShopId: pizzaShops[8].id, pizzaType: 'Meat Lovers', description: 'Pepperoni, sausage, bacon, ham.' },
      { pizzaShopId: pizzaShops[8].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[8].id, pizzaType: 'Hawaiian', description: 'Ham, pineapple, mozzarella.' },
    ],
    { individualHooks: true }
  );
};
import { PizzaShop, PizzaType } from '../models/index.js';

export const seedPizzaData = async () => {
  // Seed Pizza Shops
  const pizzaShops = await PizzaShop.bulkCreate(
    [
      { name: "Best Pizza on 1st", description: 'Thin crust doughy and crispy - specializing in chicken slices.', address: '1038 1st Ave., New York, NY 10022', phone: '(212) 644-8400', addedBy: 'Bryan', website: "https://www.bestpizzaon1stavenue.com/" },
      { name: "La Vera Pizza", description: "It's a flavorful alternative to traditional basil pesto, offering a milder, more decadent taste", address: '67 2nd Ave., New York, NY 10003', phone: '(212) 826-8777', addedBy: 'Ricardo', website: "https://www.orderlaverapizzeriarestaurant.com/" },
      { name: "Iggy's Pizzeria", description: 'The Vodka Margherita is a bold twist on the classic Margherita pizza', address: '173 1st Ave., New York, NY 10003', phone: '(212) 353-3331', addedBy: 'Ricardo', website: "https://www.iggyspizzeriamenu.com/" },
      { name: "Lil Frankie's", description: 'From classic Margherita to inventive specialty pizzas', address: '19 1st Ave., New York, NY 10003', phone: '(212) 420-4900', addedBy: 'Ricardo', website: "https://www.lilfrankies.com/" },
      { name: "East Village Pizza", description: 'The Heart-Shaped Pepperoni pizza adds a fun, romantic twist to your favorite classic.', address: '145 1st Ave., New York, NY 10003', phone: '(212) 529-4545', addedBy: 'Ricardo', website: 'https://www.eastvillagepizza.net/' },
      { name: "Bleecker Street Pizza", description: "Whether you're grabbing a quick slice or enjoying a whole pie, Bleecker Street Pizza delivers a true taste of NYC's pizza scene.", address: '69 7th Ave., New York, NY 10014', phone: '(212) 924-4466', addedBy: 'Ricardo' , website: "https://bleeckerstreetpizza.com/"},
      { name: "Prince Street Pizza", description: "Delivering Happiness One Slice At A Time.", address: '27 Prince St, New York, NY 10012', phone: '(212)-966-4100', addedBy: 'Saif', website: "https://princestreetpizza.com/" },
      { name: "Krispy Pizza", description: "If it's not Krispy, it's not pizza!", address: '7112 13th Ave, Brooklyn, NY 11228', phone: '(718)-745-9615', addedBy: 'Saif' , website: "https://krispypizza-brooklyn.foodtecsolutions.com/ordering/home"},
      { name: "L'Industrie Pizzeria", description: "Celebrated pizza shop serving classic old-world slices and ambitious inventive flavor combinations.", address: '254 S 2nd St, Brooklyn, NY 11211', phone: '(718) 599-0002', addedBy: 'Bryan', website: "https://www.lindustriebk.com/"},
      { name: "Scarr's Pizza", description: "Pizzeria with retro looks serving pies, slices & subs made with modern ingredients.", address: '35 Orchard St, New York, NY 10002', phone: '(212) 334-3481', addedBy: 'Bryan' , website: "https://www.scarrspizza.com/"},
      { name: "Roberta's", description: "Known for their Bee Sting - sweet, smoky, spicy, all at the same time with tomato, mozzarella, sopressata, chili, and honey.", address: '261 Moore St, Brooklyn, NY 11206', phone: '(718) 417-1118', addedBy: 'Bryan' , website: "https://www.robertaspizza.com/"},
      { name: "Joe & Pats", description: "Classic Thin Crust Pizza!", address: '1758 Victory Blvd, Staten Island, NY 10314', phone: '(212) 677-4492', addedBy: 'Saif', website: "https://www.joeandpatsny.com/"},
      { name: "Artichoke Basille's Pizza", description: "Artichoke's finest", address: '321 East 14th St, New York, NY 10003', phone: '(212) 228-2004', addedBy: 'Ricardo', website: "https://www.artichokepizza.com/" },
      { name: "Two Boots Pizza", description: "A New York City-based chain serving pizza with Cajun flavors, cornmeal crusts, and non-traditional toppings.", address: '42 Ave A, New York, NY 10009', phone: '(212) 254-1919', addedBy: 'Ricardo', website: "https://www.twoboots.com/"},
      { name: "Appa's Pizza", description: "The sweet potato crust is out of this world, it is baked to perfection and so so tasty.", address: '210 1st Ave, New York, NY 10009', phone: '929-280-0921', addedBy: 'Ricardo', website: "https://appaspizza.com/" },
      { name: "Stone Bridge Artisanal Pizza", description: "One of the 31 absolute best pizza restaurants in NYC, rated by Time Out New York!", address: '16 E 41st St, New York, NY 10017', phone: '646) 791-5690', addedBy: 'Ricardo', website: "https://www.stonebridgepizzaandsalad.com/" },
      { name: "Joe & Pat's NYC", description: "The hallmark of the pizza here is the cracker-thin-mozzarella", address: '168 1st Ave, New York, NY 10009', phone: '(212) 677-4992', addedBy: 'Ricardo', website: "https://joeandpatsnyc.com/"},
      { name: "Oven Slice", description: "Pizzeria offering New York-style pies with a variety of toppings, including vegan options.", address: '84 Rivington St, New York, NY 10002', phone: '(646) 368-1743', addedBy: 'Ricardo', website: "https://www.theovensslice.com/"},
      { name: "Juliana's", description: "Classic and speciality pies from a coal-fired oven in a space by pizza legend Patsy Grimaldi", address: '19 Old Fulton St, Brooklyn, NY 11201', phone: '718-596-6700', addedBy: 'Gurprasad', website: "https://julianaspizza.com/" },
      { name: "Krave-It", description: "Pizza Joint offering award-winning wings, BBQ tater tots, and truffle chickens", address: '376 New York Ave, Huntington, NY 11743', phone: '631-514-5456', addedBy: 'Gurprasad', website: "https://www.kraveitny.com/"},
      { name: "Pizza Port", description: "Old-school pizzeria dishing up slices, pies and sides in a laid-back counter serve setting", address: '135-17 Leffers Blvd, South Ozone Park, NY 11420', phone: '718-843-9186', addedBy: 'Gurprasad', }, ],
    { returning: true }
  );

  // Seed Pizza Types, linking them to the seeded pizza shops
  await PizzaType.bulkCreate(
    [
      // Best Pizza on 1st
      { pizzaShopId: pizzaShops[0].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[0].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },
      
      // La VeraPizza
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Meat Lovers', description: 'Loaded with meats.' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },
      { pizzaShopId: pizzaShops[1].id, pizzaType: 'Hawaiian', description: 'Sweet pineapple, savory ham.' },

      // Iggy's Pizzeria
      { pizzaShopId: pizzaShops[2].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[2].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[2].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },
      { pizzaShopId: pizzaShops[2].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },

      // Lil Frankie's
      { pizzaShopId: pizzaShops[3].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },
      { pizzaShopId: pizzaShops[3].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },
      { pizzaShopId: pizzaShops[3].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },



      // East Village Pizza
      { pizzaShopId: pizzaShops[4].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[4].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },
      { pizzaShopId: pizzaShops[4].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },




      // Bleecker Street Pzza
      { pizzaShopId: pizzaShops[5].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[5].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },
      { pizzaShopId: pizzaShops[5].id, pizzaType: 'Hawaiian', description: 'Sweet pineapple, savory ham.' },
      { pizzaShopId: pizzaShops[5].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },


      // Prince Street Pizza
      { pizzaShopId: pizzaShops[6].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[6].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },
      { pizzaShopId: pizzaShops[6].id, pizzaType: 'Meat Lovers', description: 'Loaded with meats.' },
      { pizzaShopId: pizzaShops[6].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },



      // Krispy Pizza
      { pizzaShopId: pizzaShops[7].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[7].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[7].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },
      { pizzaShopId: pizzaShops[7].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },
      { pizzaShopId: pizzaShops[7].id, pizzaType: 'Hawaiian', description: 'Sweet pineapple, savory ham.' },

      // L'Industrie Pizzeria
      { pizzaShopId: pizzaShops[8].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[8].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },


      // Scarr's Pizza
      { pizzaShopId: pizzaShops[9].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[9].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },




      // Roberta's
      { pizzaShopId: pizzaShops[10].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[10].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },



      // Joe & Pats
      { pizzaShopId: pizzaShops[11].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[11].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[11].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },
      { pizzaShopId: pizzaShops[11].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },


      // Artichoke Basille's Pizza
      { pizzaShopId: pizzaShops[12].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },
      { pizzaShopId: pizzaShops[12].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[12].id, pizzaType: 'Meat Lovers', description: 'Loaded with meats.' },


      // Two Boots Pizza
      { pizzaShopId: pizzaShops[13].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[13].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },



      // Appa's Pizza
      { pizzaShopId: pizzaShops[14].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },


      // Stone Bridge Artisanal Pizza
      { pizzaShopId: pizzaShops[15].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[15].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[15].id, pizzaType: 'Meat Lovers', description: 'Loaded with meats.' },
      { pizzaShopId: pizzaShops[15].id, pizzaType: 'Hawaiian', description: 'Sweet pineapple, savory ham.' },





      // Joe & Pat's NYC
      { pizzaShopId: pizzaShops[16].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[16].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[16].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },
      { pizzaShopId: pizzaShops[16].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },


      // Oven Slice
      { pizzaShopId: pizzaShops[17].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[17].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },
      { pizzaShopId: pizzaShops[17].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[17].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },


      // Juliana's
      { pizzaShopId: pizzaShops[18].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },



      // Krave-It
      { pizzaShopId: pizzaShops[19].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[19].id, pizzaType: 'Margherita', description: 'Fresh mozzarella, basil, tomato.' },
      { pizzaShopId: pizzaShops[19].id, pizzaType: 'Vodka', description: 'Creamy tomato vodka sauce.' },
      { pizzaShopId: pizzaShops[19].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },





      // Pizza Port
      { pizzaShopId: pizzaShops[20].id, pizzaType: 'Cheese', description: 'Classic cheese pizza.' },
      { pizzaShopId: pizzaShops[20].id, pizzaType: 'Buffalo Chicken', description: 'Spicy, tangy, and cheesy.' },



    ],
    { individualHooks: true }
  );
};
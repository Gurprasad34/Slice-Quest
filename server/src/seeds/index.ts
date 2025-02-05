import { seedUsers } from './user-seeds.js';
import { seedPizzaData } from './pizza-seeds.js'; // Import pizza seed function

import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPizzaData();
    console.log('\n----- PIZZA DATA SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();

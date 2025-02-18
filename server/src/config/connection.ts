import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// Check for DATABASE_URL in environment variables for Render
const databaseUrl = process.env.DATABASE_URL;

const sequelize = databaseUrl
  ? new Sequelize(databaseUrl, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Helps with self-signed certificates (used by Render)
        },
        decimalNumbers: true,
      },
    })
  : new Sequelize(
      process.env.DB_NAME || 'your_local_db_name',
      process.env.DB_USER || 'your_local_db_user',
      process.env.DB_PASSWORD || 'your_local_db_password',
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

export default sequelize;

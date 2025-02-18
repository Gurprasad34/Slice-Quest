import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import path from 'path';
import { Sequelize } from 'sequelize';
import apiRoutes from './routes/index.js';
import { fileURLToPath } from 'url';
import { seedAll } from './seeds/index.js';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const forceDatabaseRefresh = false;

// Log the PORT to check its value
console.log(`🛠️ Attempting to start server on PORT: ${PORT}`);

// Use the DATABASE_URL from environment variables (provided by Render)
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error('❌ DATABASE_URL environment variable is missing');
  console.warn('⚠️ The server will start, but API routes requiring DB access may fail.');
}

// Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Configuration
app.use(cors({
  origin: [process.env.CLIENT_URL || "http://localhost:5173"],
  credentials: true,
}));

// Middleware
app.use(express.json());

// Debugging Middleware
app.use((req, _res, next) => {
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

app.get('/test', (_req, res) => {
  res.json({ message: '✅ Express is working' });
});

// Register API Routes FIRST
console.log('✅ Mounting /api routes...');
app.use('/api', apiRoutes);
console.log('✅ /api routes mounted successfully');

// Serve Static Files
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

// Initialize Sequelize with the DATABASE_URL environment variable
const sequelize = new Sequelize(databaseUrl || '', {  // Allow empty string to prevent crashes
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
});

// Verify Database Connection Before Starting Server
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
    return sequelize.sync({ force: forceDatabaseRefresh });
  })
  .then(() => {
    console.log('✅ Database sync complete');
    return seedAll();  // Seed the database after syncing
  })
  .then(() => {
    console.log('✅ Database seeded successfully');

    if (!PORT) {
        console.error("❌ PORT is undefined. The server cannot start.");
        process.exit(1);
    }

    console.log(`🔄 Binding server to PORT: ${PORT}`);

    // Start the Express server
    app.listen(PORT, () => {  
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
    console.warn('⚠️ Continuing startup, but API routes requiring DB access may fail.');
    
    // Ensure the server starts even if the database connection fails
    console.log(`🔄 Binding server to PORT: ${PORT}`);
    app.listen(PORT, '0.0.0.0', () => {  
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  });

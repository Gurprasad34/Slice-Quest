import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import path from 'path';
import { Sequelize } from 'sequelize';
import apiRoutes from './routes/index.js';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;

// Use the DATABASE_URL from environment variables (provided by Render)
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error('❌ DATABASE_URL environment variable is missing');
  process.exit(1); // Exit if the database URL is missing
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
const sequelize = new Sequelize(databaseUrl, {
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
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });
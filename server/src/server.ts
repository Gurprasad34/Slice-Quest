import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import path from 'path';
import apiRoutes from './routes/index.js';
import { fileURLToPath } from 'url';
import { sequelize } from './models'; // Ensure models are properly initialized
import { exec } from 'child_process';

const app = express();
const PORT = process.env.PORT || 3001;

// Ensure DATABASE_URL is set
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error('❌ DATABASE_URL environment variable is missing');
  process.exit(1);
}

// Define __dirname for ES Modules
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
  console.log(`📥 Incoming request: ${req.method} ${req.path}`);
  next();
});

// Test Route
app.get('/test', (_req, res) => {
  res.json({ message: '✅ Express is working' });
});

// Register API Routes
console.log('✅ Mounting /api routes...');
app.use('/api', apiRoutes);
console.log('✅ /api routes mounted successfully');

// Serve Static Files
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

// Function to Run Migrations
const runMigrations = async () => {
  console.log('⚙️ Running migrations...');
  return new Promise((resolve, reject) => {
    exec('npx sequelize-cli db:migrate', (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Migration error: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.warn(`⚠️ Migration warning: ${stderr}`);
      }
      console.log(`✅ Migrations complete: ${stdout}`);
      resolve(stdout);
    });
  });
};

// Initialize Sequelize & Run Migrations Before Starting Server
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
    return runMigrations(); // Apply migrations before syncing
  })
  .then(() => {
    console.log('✅ Database sync complete');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection or migration failed:', err);
  });

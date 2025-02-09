import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import path from 'path';
import { sequelize } from './models/index.js';
import apiRoutes from './routes/index.js';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;

// Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Configuration
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
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
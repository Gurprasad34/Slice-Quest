const forceDatabaseRefresh = false;

import express from 'express';
import cors from 'cors'; 
import { sequelize } from './models/index.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('Database sync complete');
  });
});
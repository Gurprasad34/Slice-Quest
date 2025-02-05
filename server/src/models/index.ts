import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { PizzaShopFactory } from './pizza-shop.js';
import { PizzaTypeFactory } from './pizza-type.js';

const User = UserFactory(sequelize);
const PizzaShop = PizzaShopFactory(sequelize);
const PizzaType = PizzaTypeFactory(sequelize);


export { User, PizzaShop, PizzaType };
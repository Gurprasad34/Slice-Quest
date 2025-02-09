import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { PizzaShopFactory } from './pizza-shop.js';
import { PizzaTypeFactory } from './pizza-type.js';

const User = UserFactory(sequelize);
const PizzaShop = PizzaShopFactory(sequelize);
const PizzaType = PizzaTypeFactory(sequelize);

PizzaShop.hasMany(PizzaType, { foreignKey: 'pizzaShopId', onDelete: 'CASCADE' });
PizzaType.belongsTo(PizzaShop, { foreignKey: 'pizzaShopId' });

export { sequelize, User, PizzaShop, PizzaType };
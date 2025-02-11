import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import { PizzaShop } from './pizza-shop.js';

interface PizzaTypeAttributes {
  id: number;
  pizzaShopId: number;
  pizzaType: string;
  description: string;
  imageUrl: string;
}

interface PizzaTypeCreationAttributes extends Optional<PizzaTypeAttributes, 'id'> {}

export class PizzaType
  extends Model<PizzaTypeAttributes, PizzaTypeCreationAttributes>
  implements PizzaTypeAttributes
{
  public id!: number;
  public pizzaShopId!: number;
  public pizzaType!: string;
  public description!: string;
  public imageUrl!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function PizzaTypeFactory(sequelize: Sequelize): typeof PizzaType {
  PizzaType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      pizzaShopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: PizzaShop,
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      pizzaType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: 'pizza_types',
      sequelize,
    }
  );

  return PizzaType;
}
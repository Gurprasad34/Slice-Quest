import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface PizzaShopAttributes {
  id: number;
  name: string;
  description: string;
  address: string;    // New address property
  phone: string; // New phone number property
  addedBy: string;
}

interface PizzaShopCreationAttributes extends Optional<PizzaShopAttributes, 'id'> {}

export class PizzaShop
  extends Model<PizzaShopAttributes, PizzaShopCreationAttributes>
  implements PizzaShopAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public address!: string;    // Add address property
  public phone!: string; // Add phone number property
  public addedBy!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function PizzaShopFactory(sequelize: Sequelize): typeof PizzaShop {
  PizzaShop.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: { // Define address column
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: { // Define phone number column
        type: DataTypes.STRING,
        allowNull: false,
      },
      addedBy: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: 'pizza_shops',
      sequelize,
    }
  );

  return PizzaShop;
}
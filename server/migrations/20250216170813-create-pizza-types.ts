import { QueryInterface, DataTypes } from 'sequelize';

'use strict';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('pizza_types', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      pizzaShopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pizza_shops',
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('pizza_types');
  },
};

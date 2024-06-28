import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IProduct } from '@interfaces/products';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IProduct>>('products', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('products');
  },
};

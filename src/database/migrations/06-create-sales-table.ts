import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ISales } from '@interfaces/sales';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ISales>>('sales', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'client_id',
        references: {
          model: {
            tableName: 'clients',
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id',
        references: {
          model: {
            tableName: 'products',
          },
          key: 'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('sales');
  },
};

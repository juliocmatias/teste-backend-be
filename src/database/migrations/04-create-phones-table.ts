import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IPhone } from '@interfaces/clients';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IPhone>>('phones', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
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
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('phones');
  },
};

import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IClient } from '@interfaces/clients';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IClient>>('clients', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      taxId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'tax_id',
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('clients');
  },
};

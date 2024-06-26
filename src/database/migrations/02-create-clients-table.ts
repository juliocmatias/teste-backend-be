import { Model, QueryInterface, DataTypes } from 'sequelize';
import IClient from '../../interfaces/clients/IClient';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IClient>>('users', {
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
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};

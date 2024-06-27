import { Model, QueryInterface, DataTypes } from 'sequelize';
import IAddress from '../../interfaces/clients/IAddress';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IAddress>>('address', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'address_number',
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
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
        unique: true
      }
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('address');
  },
};

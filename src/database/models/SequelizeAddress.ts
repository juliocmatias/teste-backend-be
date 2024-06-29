import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeAddress extends Model<InferAttributes<SequelizeAddress>,
  InferCreationAttributes<SequelizeAddress>> {
  declare id: CreationOptional<number>;

  declare street: string;
  declare addressNumber: number;
  declare city: string;
  declare zip: string;
  declare country: string;
  declare clientId: number;
}

SequelizeAddress.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addressNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'address_number'
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
    field: 'client_id'
  }
}, {
  sequelize: db,
  modelName: 'address',
  timestamps: false,
  underscored: true
});

export default SequelizeAddress;

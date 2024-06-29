import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeSale from './SequelizeSale';
import SequelizePhone from './SequelizePhone';
import SequelizeAddress from './SequelizeAddress';

class SequelizeClient extends Model<InferAttributes<SequelizeClient>,
  InferCreationAttributes<SequelizeClient>> {
  declare id: CreationOptional<number>;

  declare name: string;
  declare taxId: string;
}

SequelizeClient.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taxId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'tax_id'
  }
}, {
  sequelize: db,
  modelName: 'clients',
  timestamps: false,
  underscored: true
});

// relationship with the sales table

SequelizeClient.hasMany(SequelizeSale, {
  foreignKey: 'clientId',
  as: 'sales'
})

SequelizeSale.belongsTo(SequelizeClient, {
  foreignKey: 'clientId',
  as: 'client'
})

// relationship with the phones table

SequelizeClient.hasMany(SequelizePhone, {
  foreignKey: 'clientId',
  as: 'phones'
})

SequelizePhone.belongsTo(SequelizeClient, {
  foreignKey: 'clientId',
  as: 'clientPhone'
})

// relationship with the address table

SequelizeClient.hasOne(SequelizeAddress, {
  foreignKey: 'clientId',
  as: 'address'
})

SequelizeAddress.belongsTo(SequelizeClient, {
  foreignKey: 'clientId',
  as: 'clientAddress'
})

export default SequelizeClient;

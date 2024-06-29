import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeSale extends Model<InferAttributes<SequelizeSale>,
  InferCreationAttributes<SequelizeSale>> {
  declare id: CreationOptional<number>;

  declare clientId: number;
  declare productId: number;
  declare quantity: number;
  declare price: number;
  declare totalPrice: number;
  declare date: string;
}

SequelizeSale.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'client_id'
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id'
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
    field: 'total_price'
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize: db,
  modelName: 'sales',
  timestamps: false,
  underscored: true
});

export default SequelizeSale;

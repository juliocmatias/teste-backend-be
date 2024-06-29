import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeProduct extends Model<InferAttributes<SequelizeProduct>,
  InferCreationAttributes<SequelizeProduct>> {
  declare id: CreationOptional<number>;

  declare name: string;
  declare quantity: number;
  declare price: number;
  declare deleted: boolean;
}

SequelizeProduct.init({
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
  }
}, {
  sequelize: db,
  modelName: 'products',
  timestamps: false,
});

export default SequelizeProduct;

import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizePhone extends Model<InferAttributes<SequelizePhone>,
  InferCreationAttributes<SequelizePhone>> {
  declare id: CreationOptional<number>;

  declare phone: string;
  declare clientId: number;
}

SequelizePhone.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  phone: {
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
  modelName: 'phones',
  timestamps: false,
  underscored: true
});

export default SequelizePhone;

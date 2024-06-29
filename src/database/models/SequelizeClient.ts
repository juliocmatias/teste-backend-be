import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

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
  }
}, {
  sequelize: db,
  modelName: 'clients',
  timestamps: false,
  underscored: true
});

export default SequelizeClient;

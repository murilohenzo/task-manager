import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConfig';
import { v4 as uuidv4 } from 'uuid';

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  referenceId: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public firstName!: string;
  public lastName!: string;
  public referenceId!: string;
}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'firstName'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'lastName'
    },
    referenceId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      field: 'referenceId',
      defaultValue: uuidv4
    }
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
    underscored: true,
  }
);

// Sincroniza o modelo com o banco de dados
async function syncModel() {
  try {
      await sequelize.sync();
      console.log('Modelo User sincronizado com o banco de dados.');
  } catch (error) {
      console.error('Erro ao sincronizar o modelo User com o banco de dados:', error);
  }
}

syncModel();

export default User;

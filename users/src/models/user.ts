import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConfig';

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'firstName'
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'lastName'
    },
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

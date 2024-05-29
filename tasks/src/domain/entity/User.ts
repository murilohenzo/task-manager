import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/db';

interface UserAttributes {
    id: number;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Definindo o modelo User
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public password!: string;
    public email!: string;
    public firstname!: string;
    public lastname!: string;
}

User.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
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
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'Users',
        timestamps: false, // Desativa createdAt e updatedAt
    }
);

export default User;
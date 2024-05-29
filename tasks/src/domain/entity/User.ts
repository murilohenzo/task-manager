import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/db';

interface UserAttributes {
    id: number;
    username: string;
    email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Definindo o modelo User
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
}

// Inicialização do modelo User
User.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        tableName: 'Users',
        timestamps: false, // Desativa createdAt e updatedAt
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

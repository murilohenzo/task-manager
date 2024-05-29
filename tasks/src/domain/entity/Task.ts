import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/db';
import User from './User';

interface TaskAttributes {
    id: number;
    nome: string;
    prioridade: number;
    cor: string;
    descricao: string;
    disciplina: string;
    periodo: string;
    done: boolean;
    userId?: number;
}

interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    public id!: number;
    public nome!: string;
    public prioridade!: number;
    public cor!: string;
    public descricao!: string;
    public disciplina!: string;
    public periodo!: string;
    public done!: boolean;
    public userId?: number;
}

// Inicialização do modelo Task
Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prioridade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        disciplina: {
            type: DataTypes.STRING,
            allowNull: false
        },
        periodo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        userId: {
            type: DataTypes.BIGINT,
            references: {
                model: 'Users', // Nome da tabela referenciada
                key: 'id'
            }
        }
    },
    {
        sequelize,
        tableName: 'Tasks',
        timestamps: false, // Desativa createdAt e updatedAt
    }
);

// Definindo a associação entre Tasks e Users
Task.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' }); // Task pertence a User
User.hasMany(Task, { foreignKey: 'userId' }); // User possui várias Tasks

// Função para sincronizar o modelo Task com o banco de dados
async function syncTaskModel() {
    try {
        await sequelize.sync();
        console.log('Modelo Task sincronizado com o banco de dados.');
    } catch (error) {
        console.error('Erro ao sincronizar o modelo Task com o banco de dados:', error);
    }
}

// Sincroniza o modelo Task com o banco de dados
syncTaskModel();

export default Task;

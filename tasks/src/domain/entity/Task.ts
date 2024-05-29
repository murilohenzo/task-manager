import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/db';
import User from './User';

interface TaskAttributes {
    taskId: number;
    status: string;
    descricao: string;
    userId?: number;
}

interface TaskCreationAttributes extends Optional<TaskAttributes, 'taskId'> {}

class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    public taskId!: number;
    public status!: string;
    public descricao!: string;
    public userId?: number;
}

// Inicialização do modelo Task
Task.init(
    {
        taskId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING(250),
            allowNull: false
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

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

Task.init(
    {
        taskId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
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
Task.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Task, { foreignKey: 'userId' });

export default Task;

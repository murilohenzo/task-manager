import { DataTypes } from "sequelize";
import sequelize from "../../config/db";
import User from "./User";

const Task = sequelize.define(
    'Task',
    {
        taskId:{
            primaryKey: true,
            type: DataTypes.BIGINT,
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
            type: DataTypes.BIGINT
        }
        
    },
    {
        timestamps: false
    }
)
Task.belongsTo(User);

export default Task;
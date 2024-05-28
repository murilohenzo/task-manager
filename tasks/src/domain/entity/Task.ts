import { DataTypes } from "sequelize";
import sequelize from "../../db/config";
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
    }
)
Task.belongsTo(User);

export default Task;
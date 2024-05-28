import { DataType } from "sequelize-typescript";
import sequelize from "../../db/config";
import { DataTypes } from "sequelize";

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        password:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        email:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        firstname:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        lastname:{
            type: DataTypes.TEXT,
            allowNull: false
        },
    }
)

export default User;
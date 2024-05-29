import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    username: 'root',
    password: 'admin',
    database: 'tasks'
})

export default sequelize;
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    database: 'tasks'
})

export default sequelize;
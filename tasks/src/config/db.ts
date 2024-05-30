import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://tasks_db:3306/tasks', {
    dialect: 'mysql',
    username: 'root',
    password: 'admin',
})

export default sequelize;
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://users_db:3306/users_store', {
  dialect: 'mysql',
  username: 'root',
  password: 'admin',
  define: {
    underscored: false
  }
});

export default sequelize;

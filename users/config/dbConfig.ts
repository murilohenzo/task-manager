import mysql from 'mysql2';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('usersdb', 'root', 'root', {
  host: 'localhost,',
  dialect: 'mysql',
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connect;

import express from 'express';
import sequelize from './config/db';
import cors from 'cors';
import taskRoutes from './routes/tasksRoutes';
import userRoutes from './routes/userRoutes';
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(taskRoutes);
app.use(userRoutes);

const dbInit = async() => {
  try {
    sequelize.authenticate();
    console.log('banco de dados conectado')
  } catch (error) {
    console.log('erro ao conectar com banco de dados')
  }
}
app.get('/', (req, res) => {
  res.send('Hello World!');
});
dbInit();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
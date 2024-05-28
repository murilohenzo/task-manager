import express from 'express';
import sequelize from './db/config';
import cors from 'cors';
import taskRoutes from './routes/tasksRoutes';
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(taskRoutes);
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
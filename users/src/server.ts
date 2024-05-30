import express from 'express';
import sequelize from './config/dbConfig';
import cors from 'cors';
import userRoutes from './routes/user-routes';
const app = express();
const port = 3003;
app.use(express.json());
app.use(cors());
app.use(userRoutes);

const dbInit = async () => {
  try {
    sequelize.authenticate();
    console.log('Banco de dados conectado com sucesso');
  } catch (error) {
    console.log('Erro ao conectar ao banco de dados');
  }
};
app.get('/', (req, res) => {
  res.send('Hello World!');
});
dbInit();
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

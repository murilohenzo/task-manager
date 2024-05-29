import express from 'express';
import sequelize from './config/db';
import cors from 'cors';
import taskRoutes from './routes/tasksRoutes';
import { EventUsers } from './adapters/queue/EventUsers';

const app = express();
const port = 3005;

// Configuração do middleware
app.use(express.json());
app.use(cors());
app.use(taskRoutes);

// Função de inicialização do banco de dados
const dbInit = async () => {
  try {
    await sequelize.authenticate();
    console.log('Banco de dados conectado');
  } catch (error) {
    console.error('Erro ao conectar com banco de dados:', error);
  }
};

// Inicialização do consumidor RabbitMQ
const initializeRabbitMQConsumer = () => {
  const eventUsers = new EventUsers();
  eventUsers.consumer();
};

// Inicialização do servidor
const startServer = () => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Aplicação escutando em http://localhost:${port}`);
  });
};

// Inicialização da aplicação
const init = async () => {
  await dbInit();
  initializeRabbitMQConsumer();
  startServer();
};

init();

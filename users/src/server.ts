import express from 'express';
import connection from './config/dbConfig';

const app = express();

app.listen(3000, () => {
  console.log(`server running in port 3000`);
});

connection.connect();

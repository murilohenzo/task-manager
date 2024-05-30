import { connect } from 'amqplib/callback_api';
import { EventUserDomain } from '../../events/EventUserDomain';

export class EventUsers {

  publisher(event: EventUserDomain) {

    // uri: para bater no service do rabbit do container na rede traefik
    // rodar local mudar para: "amqp://guest:guest@localhost:5672/"
    connect("amqp://guest:guest@rabbitmq:5672/", (error, connection) => {
      if (error) {
        console.error('Erro ao conectar ao RabbitMQ:', error);
        return;
      }

      console.log("RABBITMQ CONECTADO")

      connection.createChannel((error, channel) => {
        if (error) {
          console.error('Erro ao criar o canal:', error);
          return;
        }

        console.log("CRIANDO CANAL DE COMUNICACAO")

        channel.assertQueue("todo", { durable: true });

        console.log("ENVIANDO EVENTO DE USUARIO:", event)
        channel.sendToQueue("todo", Buffer.from(JSON.stringify(event)));
      });
    });
  }
}

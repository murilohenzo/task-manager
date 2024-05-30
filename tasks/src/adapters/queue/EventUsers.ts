import { connect } from 'amqplib/callback_api';
import { UserService } from '../../services/UserService';
import { EventUserDomain, EventType } from '../../domain/events/EventUserDomain';
import User from '../../domain/entity/User';

export class EventUsers {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  consumer() {

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

        console.log("CRIANDO CANAL DE COMUNICACAO COM A FILA")

        channel.assertQueue("todo");

        channel.consume("todo", async (message) => {
          if (message !== null) {
            const msgContent = message.content.toString();
            try {
              const eventData: EventUserDomain = JSON.parse(msgContent);
              const { eventType, ...userData } = eventData;

              if (eventType == null || userData.username == null || userData.email == null) {
                console.error("Mensagem inválida:", eventData);
                channel.ack(message);
                return;
              }

              // @ts-ignore
              const user: User = userData; 

              console.log("EVENTO DE USUARIO RECEBIDO:", eventType)

              switch (eventType) {
                case EventType.CREATED:
                  {
                    const existingUser = await this.userService.findUserByReferenceId(userData.referenceId);

                    if (existingUser) throw new Error('Usuario ja existe na base');
                    
                    // @ts-ignore
                    await this.userService.createUser({id: null, ...user});
                    break;
                  }
                case EventType.UPDATED:
                  {
                    const existingUser = await this.userService.findUserByReferenceId(userData.referenceId);
                    if (!existingUser) throw new Error('Usuario nao existe na base');
                    await this.userService.updateUser(user);
                    break;
                  }
                case EventType.DELETED:
                  {
                    const existingUser = await this.userService.findUserByReferenceId(userData.referenceId);
                    if (existingUser?.id) {
                      await this.userService.deleteUser(existingUser.referenceId);
                    } else {
                      console.log("Usuário não encontrado com o email:", userData.email);
                    }
                    break;
                  }
                default:
                  console.error("Evento desconhecido:", eventType);
              }

              console.log("Mensagem processada:", eventData);
            } catch (error) {
              // @ts-ignore
              console.error("Erro ao processar mensagem:", error.message);
            }

            channel.ack(message);
          } else {
            console.log("Consumer cancelado pelo servidor");
          }
        });
      });
    });
  }
}

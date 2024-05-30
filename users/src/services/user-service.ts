import { UserModel } from '../types';
import User from '../models/user';
import { Op } from 'sequelize';
import { EventUsers } from './queue/EventUsers';
import { EventType } from '../events/EventUserDomain';

export default class UserService {

  private eventUsers: EventUsers;

  constructor() {
    this.eventUsers = new EventUsers();
  }

  public createUser = async (userData: User) => {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ username: userData.username }, { email: userData.email }],
      },
    });

    if (existingUser) {
      throw new Error('Usuário já cadastrado');
    } else {
      const user = await User.create(userData);

      console.log("DISPARANDO EVENTO DE CRIAÇÃO");
      this.eventUsers.publisher({
        username: user.dataValues.username,
        email: user.dataValues.email,
        referenceId: user.dataValues.referenceId,
        eventType: EventType.CREATED
      });
      return user;
    }
  };

  public getAllUser = async () => {
    return await User.findAll();
  };

  public updateUser = async (userNewData: UserModel) => {
    try {

      const [rowsUpdated] = await User.update(
        {
          email: userNewData.email,
          username: userNewData.username,
          firstName: userNewData.firstname,
          lastName: userNewData.lastname,
          password: userNewData.password,
        },
        {
          where: {
            id: userNewData.id,
          },
        }
      );

      const user = await User.findByPk(userNewData.id);

      if (user == null) {
        console.log("usuario nao encontrado com o id:", userNewData.id)
      }

      if (rowsUpdated === 0) {
        console.log("Usuario nao atualizou os campos")
      }

      if (user && rowsUpdated > 0) {
        console.log("DISPARANDO EVENTO DE ATUALIZAÇÃO");
        this.eventUsers.publisher({
          username: userNewData.username,
          email: userNewData.email,
          referenceId: user.dataValues.referenceId,
          eventType: EventType.UPDATED
        });
      }

      return userNewData;
    } catch (error) {
      console.error('erro no servidor => ', error);
    }
  };

  public deleteUser = async (userId: number): Promise<boolean> => {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await User.destroy({
      where: {
        id: userId,
      },
    });

    console.log("Usuário removido");

    this.eventUsers.publisher({
      username: user.dataValues.username,
      email: user.dataValues.email,
      referenceId: user.dataValues.referenceId,
      eventType: EventType.DELETED
    });

    return true
  };
}

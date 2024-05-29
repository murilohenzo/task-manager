import { UserModel } from '../types';
import User from '../models/user';

export default class UserService {
  public createUser = async (userData: User) => {
    const user = await User.create(userData);
    user.save();
    return user;
  };

  public getAllUser = async () => {
    return await User.findAll();
  };

  public updateUser = async (userNewData: UserModel) => {
    try {
      const userFromDb = await User.findOne({
        where: {
          id: userNewData.id,
        },
      });
      if (!userFromDb) throw new Error('usuário não encontrado');
      const user = {
        email: userNewData.email ? userNewData.email : userFromDb.email,
        username: userNewData.username
          ? userNewData.username
          : userFromDb.username,
        password: userNewData.password
          ? userNewData.password
          : userFromDb.password,
        firstname: userNewData.firstname
          ? userNewData.firstname
          : userFromDb.firstname,
        lastname: userNewData.lastname
          ? userNewData.lastname
          : userFromDb.lastname,
      };

      return await User.update(
        {
          email: user.email,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          password: user.password,
        },
        {
          where: {
            id: userNewData.id,
          },
        }
      );
    } catch (error) {
      console.error('erro no servidor => ', error);
    }
  };

  public deleteUser = async (userId: number) => {
    return await User.destroy({
      where: {
        id: userId,
      },
    });
  };
}

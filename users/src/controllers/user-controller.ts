import { Request, Response } from 'express';
import { User } from '../models/user';
import { hash } from 'bcryptjs';

export default class UserController {
  static getUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  };

  static createUser = async (req: Request, res: Response) => {
    try {
      const { nome, email, senha } = req.body;
      const hashedPassword = await hash(senha, 8);
      const user = new User({ nome, email, senha: hashedPassword });

      if (
        await User.findAll({
          where: {
            email: email,
          },
        })
      ) {
        res.status(401).json({ message: 'email já cadastrado' });
      }

      user.save();
      res.status(201).json({ message: 'usuário criado com sucesso', user });
    } catch (error) {
      console.log(error);
    }
  };
}

import { Request, Response } from 'express';
import UserService from '../services/user-service';
import { UserModel } from '../types';
import User from '../models/user';
export default class TasksController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getAllUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getAllUser();
    return res.status(200).json({
      users,
    });
  };

  public createUser = async (req: Request, res: Response) => {
    const userData: User = Object.keys(req.body).length !== 0 ? req.body : null;

    if (!userData) {
      return res.status(404).json({
        message: 'Dados não encontrados',
      });
    }

    try {
      if (userData) {
        const user = await this.userService.createUser(userData);
        if (user)
          return res.status(201).json({
            message: 'Usuário cadastrado com sucesso',
            user: user,
          });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };

  public updateUser = async (req: Request, res: Response) => {
    const userNewData = req.body;
    userNewData.id = req.params.id;
    const updated = await this.userService.updateUser(userNewData);
    if (updated)
      return res.status(200).json({
        message: 'Usuário atualizado com sucesso',
        updated,
      });
  };

  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = await this.userService.deleteUser(+id);
    if (deleted)
      return res.status(200).json({
        message: 'Usuário deletado com sucesso',
      });
  };
}

import { Request, Response } from "express";
import UserService from "../services/UserService";
import { UserModel } from '../../types';
import User from '../domain/entity/User'
export default class TasksController{
    private userService: UserService;

    constructor(){
        this.userService = new UserService();
    }

    public getAllUsers = async (req: Request, res: Response) => {
        const users = await this.userService.getAllUser();
        return res.status(200).json({
            users
        })
    }

    public createUser = async (req: Request, res: Response) => {
        const userData: User = req.body;
        const user = await this.userService.createUser(userData)
        if(user) return res.status(201).json({
            message: "user cadastrado com sucesso",
            user: user
        })
    }

}
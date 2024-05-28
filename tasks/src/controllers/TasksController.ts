import { Request, Response } from "express";
import TaskService from "../services/TaskService";
import { TaskModel } from '../../types';
export default class TasksController{
    private taskService: TaskService;

    constructor(){
        this.taskService = new TaskService();
    }

    public getAllTasks = async (req: Request, res: Response) => {
        const { userId } = req.params;
        const tasks = await this.taskService.getAllTasks(userId);
    }

    public createTask = async (req: Request, res: Response) => {
        const { userId, status, descricao}= req.body;
        const taskId = undefined
        const created = await this.taskService.createTask({userId, status, descricao, taskId});
        if(created) return res.status(201).json({
            message: "task cadastrada com sucess",
            task: created
        })
    }

    public updateTask = async (req: Request, res: Response) => {
        const newTaskData : TaskModel= req.body; 
        const updated = await this.taskService.updateTask(newTaskData);
        if (updated) return res.status(200).json({
            message: "task atualizada com sucesso!"
        })
    }

    public deleteTask = async (req: Request, res: Response) => {
        const { taskId } = req.body
        const deleted = await this.taskService.deleteTask(taskId);
        return res.status(200).json({
            message: "task deletada com sucesso"
        })
    }
}
import { Request, Response } from "express";
import TaskService from "../../services/TaskService";
import { TaskDTO } from "../../dto/TaskDTO";

export default class TasksController{
    private taskService: TaskService;

    constructor(){
        this.taskService = new TaskService();
    }

    public getAllTasks = async (req: Request, res: Response) => {
        const { userId } = req.params;
        const tasks = await this.taskService.getAllTasks(userId);
        return res.status(200).json({tasks})
    }

    public createTask = async (req: Request, res: Response) => {
        const { userId, done, descricao, ...rest }: TaskDTO = req.body;
        const id = undefined
        // TODO: VALIDAR USUARIO EXISTE NA BASE ?
        const task = await this.taskService.createTask({userId, done, descricao, ...rest});
        if(task) return res.status(201).json({
            message: "task cadastrada com sucess",
            task: task
        })
    }

    public updateTask = async (req: Request, res: Response) => {
        const newTaskData : TaskDTO = req.body; 
        newTaskData.id = +req.params.taskId;
        const updated = await this.taskService.updateTask(newTaskData);
        if (updated) return res.status(200).json({
            message: "task atualizada com sucesso!"
        })
    }

    public deleteTask = async (req: Request, res: Response) => {
        const { taskId } = req.params
        const deleted = await this.taskService.deleteTask(taskId);
        return res.status(200).json({
            message: "task deletada com sucesso"
        })
    }
}
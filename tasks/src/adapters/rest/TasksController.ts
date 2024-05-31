import { Request, Response } from "express";
import TaskService from "../../services/TaskService";
import { TaskDTO } from "../../dto/TaskDTO";
import { UserService } from "../../services/UserService";

export default class TasksController{
    private taskService: TaskService;
    private userService: UserService;

    constructor(){
        this.taskService = new TaskService();
        this.userService = new UserService();
    }

    public getAllTasks = async (req: Request, res: Response) => {
        console.log("ENTROU NO METODO FINDALL")
        const { userId } = req.params;
        const tasks = await this.taskService.getAllTasks(userId);
        return res.status(200).json({tasks})
    }

    public createTask = async (req: Request, res: Response) => {
        console.log("ENTROU NO METODO CREATE")
        console.log(req.body)
        const { userReferenceId, done, descricao, ...rest }: TaskDTO = req.body;
        const id = undefined
        // TODO: VALIDAR USUARIO EXISTE NA BASE ?

        const user = await this.userService.findUserByReferenceId(userReferenceId);

        if (!user) {
            return res.status(404).json({
                message: "usuario nao encontrado na base"
            });
        }

        const task = await this.taskService.createTask({userReferenceId, done, descricao, ...rest});
        if(task) return res.status(201).json({
            message: "task cadastrada com sucess",
            task: task
        })
    }

    public updateTask = async (req: Request, res: Response) => {
        console.log("ENTROU NO METODO UODATE")
        console.log(req.body)
        const newTaskData : TaskDTO = req.body; 
        newTaskData.id = +req.params.taskId;
        const updated = await this.taskService.updateTask(newTaskData);
        if (updated) return res.status(200).json({
            message: "task atualizada com sucesso!"
        })
    }

    public deleteTask = async (req: Request, res: Response) => {

        console.log("ENTROU NO METODO DELETE")
        console.log(req.params)

        const { taskId } = req.params
        const deleted = await this.taskService.deleteTask(taskId);
        return res.status(200).json({
            message: "task deletada com sucesso"
        })
    }
}
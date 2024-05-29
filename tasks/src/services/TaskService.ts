import Task from "../domain/entity/Task";
import { TaskDTO } from "../dto/TaskDTO";
export default class TaskService{

    public getAllTasks = async(userId: string) => {
        return await Task.findAll({
            where: {
                userId
            }
        })
    }

    public createTask = async(taskData: TaskDTO) => {
        const task = await Task.create(taskData);
        task.save();
        return task;
    }

    public updateTask = async(taskData: TaskDTO) => {
        if(taskData.descricao){
            await Task.update({
                descricao: taskData.descricao
            }, {
                where: {
                    taskId: taskData.taskId
                }
            })
        }
        if(taskData.status){
            await Task.update({
                descricao: taskData.status
            }, {
                where: {
                    taskId: taskData.taskId
                }
            })
        }
        return true;
    }

    public deleteTask = async(taskId: string) => {
        return await Task.destroy({
            where: {
                taskId
            }
        });
    }
}
import Task from "../domain/entity/Task";

export default class TaskService{

    public getAllTasks = async(userId: string) => {
        return await Task.findAll({
            where: {
                userId
            }
        })
    }

    public createTask = async(taskData: TaskModel) => {
        return await Task.create(taskData);
    }

    public updateTask = async(taskData: TaskModel) => {
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
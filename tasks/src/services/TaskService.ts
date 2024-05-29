import Task from "../domain/entity/Task";
import { TipoPrioridade, CorPrioridade } from "../dto/PrioridadeEnum";
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
        const {prioridade, cor, ...task} = taskData;
        const getColor = this.getColorPrioridade(+taskData.prioridade);
        const newTask = await Task.create({cor: getColor, prioridade, ...task});
        newTask.save();
        return newTask;
    }

    public updateTask = async(taskData: TaskDTO) => {
        if(taskData.descricao){
            await Task.update({
                descricao: taskData.descricao
            }, {
                where: {
                    id: taskData.id
                }
            })
        }
        if(taskData.done) { // TODO: Mudei para boleano 
            await Task.update({
                descricao: taskData.descricao,
                disciplina: taskData.disciplina,
                periodo: taskData.periodo
            }, {
                where: {
                    id: taskData.id
                }
            })
        }
        return true;
    }

    public deleteTask = async(id: string) => {
        return await Task.destroy({
            where: {
                id
            }
        });
    }

    private getColorPrioridade(prioridade: number) {
        if(prioridade === TipoPrioridade.alta) return CorPrioridade.alta;
        else if (prioridade === TipoPrioridade.media) return CorPrioridade.media;
        return CorPrioridade.baixa;
    }
}
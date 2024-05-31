export interface TaskList {
  tasks: Task[];
}

export interface Task {
  id: number;
  nome: string;
  prioridade: number;
  cor: string;
  descricao: string;
  disciplina: string;
  periodo: string;
  done: boolean;
  userReferenceId: number;
}

export interface NewTask {
  nome: string;
  prioridade: number;
  descricao: string;
  disciplina: string;
  periodo: string;
  userReferenceId: string;
}

export interface NewTaskResponse {
  message: string;
  task: Task;
}

export interface Task {
  id: number;
  nome: string;
  prioridade: number;
  cor: string;
  descricao: string;
  disciplina: string;
  periodo: string;
  done: boolean;
  userId: number;
}

export type TaskDTO = {
  id: number | undefined,
  nome: string;
  prioridade: number;
  cor: string;
  descricao: string;
  disciplina: string;
  periodo: string;
  done: boolean;
  userReferenceId: string
}
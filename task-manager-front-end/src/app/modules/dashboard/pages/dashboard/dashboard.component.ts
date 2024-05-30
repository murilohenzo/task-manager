import { Component } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tasks: Task[] = [
    {
      id: 1,
      nome: 'Atividade 1',
      prioridade: 1,
      cor: '#db2f49',
      descricao: 'Teste inicial',
      disciplina: 'N780',
      periodo: '2024.1',
      done: false,
      userId: 1234
    },
    {
      id: 2,
      nome: 'Atividade 2',
      prioridade: 2,
      cor: '#fa6845',
      descricao: 'Teste inicial 2',
      disciplina: 'N780',
      periodo: '2024.1',
      done: false,
      userId: 12344
    },
    {
      id: 3,
      nome: 'Atividade 3',
      prioridade: 3,
      cor: '#fca553',
      descricao: 'Teste inicial 3',
      disciplina: 'N780',
      periodo: '2024.1',
      done: true,
      userId: 123445
    }
  ];
}

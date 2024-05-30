import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { PriorityColors, PriorityLevel } from '../../enums/priority-level';

@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['./dashboard-task.component.scss']
})
export class DashboardTaskComponent {
  @Input() task!: Task;
  @Output() reloadTasks: EventEmitter<boolean> = new EventEmitter();

  editForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.verifyColorChange();
    this.mapValueChanged();
  }

  private buildForm(): void {
    this.editForm = this.fb.group({
      id: [this.task.id],
      nome: [this.task.nome],
      prioridade: [this.task.prioridade],
      cor: [this.task.cor],
      descricao: [this.task.descricao],
      disciplina: [this.task.disciplina],
      periodo: [this.task.periodo],
      done: [this.task.done],
      userId: [this.task.userId]
    });
  }

  private verifyColorChange(): void {
    this.editForm.controls['prioridade'].valueChanges.subscribe((value) => {
      this.setDividerColor(value);
    });
  }

  private mapValueChanged(): void {
    for (const field in this.editForm.controls) {
      this.editForm.controls[field].valueChanges.subscribe((value) => {
        if (field !== 'cor') {
          // TODO: adicionar método de atualização da task
        }
        return;
      });
    }
  }

  private setDividerColor(priority: string): void {
    switch (priority) {
      case PriorityLevel.HIGH_PRIORITY:
        this.editForm.controls['cor'].setValue(PriorityColors.HIGH);
        break;
      case PriorityLevel.MEDIUM_PRIORITY:
        this.editForm.controls['cor'].setValue(PriorityColors.MEDIUM);
        break;
      case PriorityLevel.LOW_PRIORITY:
        this.editForm.controls['cor'].setValue(PriorityColors.LOW);
        break;
      default:
        this.editForm.controls['cor'].setValue(PriorityColors.DEFAULT);
        break;
    }
  }
}

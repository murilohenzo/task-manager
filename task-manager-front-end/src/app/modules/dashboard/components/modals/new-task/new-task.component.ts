import { Component, Inject } from '@angular/core';
import { PriorityColors, PriorityLevel } from '../../../enums/priority-level';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewTaskModal } from '../../../interfaces/new-task-modal.interface';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  newTaskForm!: FormGroup;
  dividerColor: string = '';

  constructor(
    public dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewTaskModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.verifyValueChanges();
  }

  createTask(): void {
    // TODO: Adicionar método de criação de task
    console.log(this.newTaskForm.value);
  }

  private buildForm(): void {
    this.newTaskForm = this.fb.group({
      nome: ['', [Validators.required]],
      prioridade: ['', [Validators.required]],
      descricao: [''],
      disciplina: [''],
      periodo: [''],
      done: [false],
      usuario: [this.data.usuario]
    });
  }

  private verifyValueChanges(): void {
    this.newTaskForm.valueChanges.subscribe((value) => {
      this.setDividerColor(value.prioridade);
    });
  }

  private setDividerColor(priority: string): void {
    switch (priority) {
      case PriorityLevel.HIGH_PRIORITY:
        this.dividerColor = PriorityColors.HIGH;
        break;
      case PriorityLevel.MEDIUM_PRIORITY:
        this.dividerColor = PriorityColors.MEDIUM;
        break;
      case PriorityLevel.LOW_PRIORITY:
        this.dividerColor = PriorityColors.LOW;
        break;
      default:
        this.dividerColor = PriorityColors.DEFAULT;
        break;
    }
  }
}

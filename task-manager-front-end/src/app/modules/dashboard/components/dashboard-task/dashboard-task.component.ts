import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { PriorityColors, PriorityLevel } from '../../enums/priority-level';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTaskComponent } from '../modals/delete-task/delete-task.component';
import { DashboardService } from '../../services/dashboard.service';
import { Router } from '@angular/router';
import { ErrorModalComponent } from 'src/app/shared/components/modals/error-modal/error-modal.component';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['./dashboard-task.component.scss']
})
export class DashboardTaskComponent {
  @Input() task!: Task;
  @Output() reloadTasks: EventEmitter<boolean> = new EventEmitter();

  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.verifyColorChange();
    this.mapValueChanged();
  }

  openDeleteTaskModal(): void {
    this.dialog
      .open(DeleteTaskComponent, {
        maxWidth: '400px',
        data: { id: this.editForm.controls['id'].value }
      })
      .afterClosed()
      .subscribe(() => this.reloadTasks.emit(true));
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
      userId: [this.task.userReferenceId]
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
          this.updateTask(field, value);
        }
        return;
      });
    }
  }

  private updateTask(field: string, value: any): void {
    this.dashboardService
      .updateTask(this.editForm.value.id, this.getBodyFormatted(field, value))
      .subscribe({
        error: () => {
          this.dialog
            .open(ErrorModalComponent, { maxWidth: '370px' })
            .afterClosed()
            .subscribe(() => this.router.navigate([Routes.DASHBOARD]));
        }
      });
  }

  private getBodyFormatted(field: string, value: any): Partial<Task> {
    const body: Partial<Task> = {};
    body[field as keyof Task] = value;
    return body;
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

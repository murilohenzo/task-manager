import { Component, Inject } from '@angular/core';
import { PriorityColors, PriorityLevel } from '../../../enums/priority-level';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';
import { NewTaskModal } from '../../../interfaces/new-task-modal.interface';
import { DashboardService } from '../../../services/dashboard.service';
import { Router } from '@angular/router';
import { ErrorModalComponent } from 'src/app/shared/components/modals/error-modal/error-modal.component';
import { Routes } from 'src/app/shared/enums/routes';

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
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.verifyValueChanges();
  }

  createTask(): void {
    if (this.newTaskForm.valid) {
      this.dashboardService.createTask(this.newTaskForm.value).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: () => {
          this.dialogRef.close();
          this.dialog
            .open(ErrorModalComponent, { maxWidth: '370px' })
            .afterClosed()
            .subscribe(() => this.router.navigate([Routes.DASHBOARD]));
        }
      });
      return;
    }
    this.dialogRef.close();
  }

  private buildForm(): void {
    this.newTaskForm = this.fb.group({
      nome: ['', [Validators.required]],
      prioridade: ['', [Validators.required]],
      descricao: [''],
      disciplina: [''],
      periodo: [''],
      done: [false],
      userReferenceId: [this.data.userReferenceId]
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

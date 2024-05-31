import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { NewTaskComponent } from '../../components/modals/new-task/new-task.component';
import { DashboardService } from '../../services/dashboard.service';
import { Router } from '@angular/router';
import { ErrorModalComponent } from 'src/app/shared/components/modals/error-modal/error-modal.component';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tasks: Task[] = [];
  userId!: string | null;

  constructor(
    private dashboardService: DashboardService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserId();
    this.getTasks();
  }

  openModalNewTask(): void {
    this.dialog
      .open(NewTaskComponent, {
        data: { usuario: this.userId },
        width: '420px'
      })
      .afterClosed()
      .subscribe(() => {
        this.getTasks();
      });
  }

  reloadTasks(): void {
    this.getTasks();
  }

  private getUserId(): void {
    this.userId = JSON.parse(localStorage.getItem('id') as string);
  }

  private getTasks(): void {
    if (this.userId) {
      this.dashboardService.getTasksByUser(this.userId).subscribe({
        next: (tasksByUser: Task[]) => {
          this.tasks = tasksByUser;
        },
        error: () =>
          this.dialog
            .open(ErrorModalComponent, { width: '400px' })
            .afterClosed()
            .subscribe(() => this.router.navigate([Routes.DEFAULT]))
      });
    }
  }
}

import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DashboardService } from '../../../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarSucessDeleteComponent } from 'src/app/shared/components/snackbars/snackbar-sucess-delete/snackbar-sucess-delete.component';
import { ErrorModalComponent } from 'src/app/shared/components/modals/error-modal/error-modal.component';
import { Routes } from 'src/app/shared/enums/routes';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private dashboardService: DashboardService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) {}

  deleteTask(): void {
    this.dashboardService.deleteTask(this.data.id).subscribe({
      next: () => {
        this._snackBar.openFromComponent(SnackbarSucessDeleteComponent, {
          duration: 5000
        });
      },
      error: () => {
        this.dialog
          .open(ErrorModalComponent, { width: '400px' })
          .afterClosed()
          .subscribe(() => this.router.navigate([Routes.DASHBOARD]));
      }
    });
  }
}

import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-sucess-delete',
  templateUrl: './snackbar-sucess-delete.component.html',
  styleUrls: ['./snackbar-sucess-delete.component.scss']
})
export class SnackbarSucessDeleteComponent {
  snackBarRef = inject(MatSnackBarRef);
}

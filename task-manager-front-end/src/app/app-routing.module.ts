import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/mainframe/mainframe.module').then(
        (m) => m.MainframeModule
      )
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('../app/modules/mainframe/mainframe.module').then(
        (m) => m.MainframeModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

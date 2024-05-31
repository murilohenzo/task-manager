import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { MainframePageComponent } from './pages/mainframe-page/mainframe-page.component';
import { RegistrationComponent } from '../registration/pages/registration/registration.component';
import { LoginComponent } from '../login/pages/login/login.component';
import { RegistrationConfirmComponent } from '../registration/pages/registration-confirm/registration-confirm.component';
import { DashboardComponent } from '../dashboard/pages/dashboard/dashboard.component';
import { UnauthorizedComponent } from '../unauthorized/pages/unauthorized/unauthorized.component';
import { DashboardGuard } from '../dashboard/guard/dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: MainframePageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'registration-confirm',
        component: RegistrationConfirmComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [DashboardGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainframeRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainframeRoutingModule } from './mainframe-routing.module';
import { MainframePageComponent } from './pages/mainframe-page/mainframe-page.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationModule } from '../registration/registration.module';
import { LoginModule } from '../login/login.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [MainframePageComponent],
  imports: [
    CommonModule,
    HomeModule,
    RegistrationModule,
    LoginModule,
    DashboardModule,
    MainframeRoutingModule,
    SharedModule
  ]
})
export class MainframeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationConfirmComponent } from './pages/registration-confirm/registration-confirm.component';

@NgModule({
  declarations: [RegistrationComponent, RegistrationConfirmComponent],
  imports: [CommonModule, SharedModule]
})
export class RegistrationModule {}

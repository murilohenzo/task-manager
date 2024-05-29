import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, SharedModule]
})
export class RegistrationModule {}

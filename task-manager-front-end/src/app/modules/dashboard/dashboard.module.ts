import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardTaskComponent } from './components/dashboard-task/dashboard-task.component';

@NgModule({
  declarations: [DashboardComponent, DashboardTaskComponent],
  imports: [CommonModule, SharedModule]
})
export class DashboardModule {}

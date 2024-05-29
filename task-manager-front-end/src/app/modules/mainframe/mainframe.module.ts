import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainframeRoutingModule } from './mainframe-routing.module';
import { MainframePageComponent } from './pages/mainframe-page/mainframe-page.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainframePageComponent],
  imports: [CommonModule, HomeModule, MainframeRoutingModule, SharedModule]
})
export class MainframeModule {}

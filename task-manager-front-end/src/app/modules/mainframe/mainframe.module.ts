import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainframePageComponent } from './pages/mainframe-page/mainframe-page.component';
import { HomeModule } from '../home/home.module';
import { MainframeRoutingModule } from './mainframe-routing.module';

@NgModule({
  declarations: [MainframePageComponent],
  imports: [CommonModule, HomeModule, MainframeRoutingModule]
})
export class MainframeModule {}

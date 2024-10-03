import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { VideoModule } from '../../features/video/video.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    VideoModule,
    SharedModule
  ],
})
export class HomeModule { }

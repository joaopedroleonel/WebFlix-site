import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPageComponent } from './video-page.component';
import { VideoModule } from '../../features/video/video.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    VideoPageComponent
  ],
  imports: [
    CommonModule,
    VideoModule
  ]
})
export class VideoPageModule { }

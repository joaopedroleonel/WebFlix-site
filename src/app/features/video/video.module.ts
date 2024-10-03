import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoFilterComponent } from './components/video-filter/video-filter.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';



@NgModule({
  declarations: [
    VideoListComponent,
    VideoFilterComponent,
    VideoPlayerComponent
  ],
  exports: [
    VideoListComponent,
    VideoFilterComponent,
    VideoPlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VideoModule { }

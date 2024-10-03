import { Component, Input } from '@angular/core';
import { urlServer } from '../../../../core/url-api';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {

  @Input({ required: true, alias: 'src' }) srcVideo: string = '';

  srcVideoUrl() {
    return urlServer + this.srcVideo;
  }

}

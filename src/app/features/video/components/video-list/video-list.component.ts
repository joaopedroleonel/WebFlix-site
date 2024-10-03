import { Component, Input } from '@angular/core';
import { VideoListI } from '../../interfaces/video';
import { urlApi, urlServer } from '../../../../core/url-api';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {

  @Input({ required: true, alias: 'videoList' }) videoListInput!: VideoListI[];

  url = urlApi;
  urlImage = urlServer;

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { urlApi, urlServer } from '../../core/url-api';
import { ApiService } from '../../core/services/api.service';
import { VideoPageI } from './video-page';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss'
})
export class VideoPageComponent implements OnInit {

  videoPlayerInfo: VideoPageI | null = null;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  getVideoPlayerInfo(id: number) {
    this.api.getData(`/Video/${id}`).subscribe(
      (response) => {
        this.videoPlayerInfo = response[0];
      }
    )

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.getVideoPlayerInfo(Number(params['id']));
    });

  }

  urlVideo = urlServer;

}

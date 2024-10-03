import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { GenreI, VideoListI } from '../../features/video/interfaces/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  videoList: VideoListI[] = []; 
  genresList: GenreI[] = [];

  constructor(private api: ApiService) {}

  getVideoList() {

    this.api.getData('/Video/videoList').subscribe(

      (response) => {
        this.videoList = response;
      },
      (error) => {
        console.log(error);
      }

    );

  }

  getGenresList() {

    this.api.getData('/Genre').subscribe(

      (response) => {
        this.genresList = response;
      },
      (error) => {
        console.log(error);
      }

    );

  }

  getVideoListByGenre(id: number) {

    this.api.getData(`/Video/genre?genreId=${id}`).subscribe(

      (response) => {
        this.videoList = response;
      },
      (error) => {
        console.log(error);
      }

    );

  }

  ngOnInit(): void {

    this.getVideoList();
    this.getGenresList();
    
  }

  genreFilter(idGenre: number) {

    if(idGenre == 0) {
      this.getVideoList();
    } else {
      this.getVideoListByGenre(idGenre);
    }
    
  }

}

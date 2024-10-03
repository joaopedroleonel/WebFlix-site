import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenreI } from '../../interfaces/video';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-video-filter',
  templateUrl: './video-filter.component.html',
  styleUrl: './video-filter.component.scss'
})
export class VideoFilterComponent {

  @Input({ required: true, alias: 'genres' }) genresVideo!: GenreI[];

  @Output('genreFilter') genreFilterEmitter: EventEmitter<number> = new EventEmitter();

  selectedGenre(id: number) {
    this.genreFilterEmitter.emit(id);
  }

}

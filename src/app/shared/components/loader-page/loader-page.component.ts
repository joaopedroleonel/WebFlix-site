import { AfterViewInit, Component, EventEmitter, Inject, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loader-page',
  templateUrl: './loader-page.component.html',
  styleUrl: './loader-page.component.css'
})
export class LoaderPageComponent implements OnInit {

  constructor(
    private loaderService: LoaderService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  mostrarDisplay = 'flex';

  ngOnInit(): void {

    this.loaderService.isLoading.subscribe((value: boolean) => {
      this.mostrarDisplay = value ? 'flex' : 'none';
    })

  }

}

import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderPageComponent } from './components/loader-page/loader-page.component';
import { LoaderService } from './services/loader.service';



@NgModule({
  declarations: [
    FooterComponent,
    LoaderPageComponent
  ],
  exports: [
    FooterComponent,
    LoaderPageComponent
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlApi } from '../url-api';
import { delay, finalize, Observable } from 'rxjs';
import { LoaderService } from '../../shared/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private loader: LoaderService) { }

  getData(endpoint: string): Observable<any> {

    this.loader.show();

    return this.http.get(urlApi + endpoint).pipe(delay(450), finalize(() => this.loader.hide()));
  }

}

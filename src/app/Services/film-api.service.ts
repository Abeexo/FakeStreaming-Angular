import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmAPIService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getFilmData = (): Observable<any> => {
    return this.http.get<any>('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON');
  }

  setCardFilm(data: any) {
    this.subject.next(data);
  }

  getCardFilm() {
    return this.subject.asObservable();
  }

}

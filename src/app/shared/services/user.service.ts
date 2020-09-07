import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../constants/global-constants';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getMovies(title: string): Observable<Movie> {
    const options = title ? {params: new HttpParams().set('t', title)} : {};
    return this.http.get<Movie>(GlobalConstants.moviesURL, options);
  }
}

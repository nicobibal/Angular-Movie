import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Movie } from './types';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  serverUrl = 'https://movie-api.benoithubert.me';

  constructor(private http: HttpClient) {
    
   }

   getAllMovies(): Observable<Movie[]> {
      return this.http.get<Movie[]>(
        `${this.serverUrl}/movies`
      )
   }

   getMovie(id : number): Observable<Movie> {
    return this.http.get<Movie>(
      `${this.serverUrl}/movies/${id}`
    )

   }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovie(query: any): Observable<any> {
    const params = new HttpParams()
      .set('page', query.page)
      .set('query', query.searchQuery)
      .set('api_key', environment.movieApiKey);
    return this.http
      .get<any>(environment.movieURL, { params: params })
      .pipe(
        tap((response: any) => {
          const movies = response.results;
          return movies;
        })
      );
  }
  getById(id: number): Observable<any> {
    const params = new HttpParams().set('api_key', environment.movieApiKey);
    return this.http
      .get<any>(`${environment.movieDetailsURL}/${id}`, { params: params })
      .pipe(
        map((result) => {
          return {
            ...result,
            id,
          };
        })
      );
  }

  getPopularMovies(type: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.movieApiKey)
      .set('language', 'en-US')
      .set('page', 1);
    return this.http
      .get<any>(`${environment.movieDetailsURL}${type}`, {
        params: params,
      })
      .pipe(
        tap((response: any) => {
          const movies = response.results;
          return movies;
        })
      );
  }
}

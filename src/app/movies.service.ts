import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey = 'f6c94084ee64e7faa69c7c4a2b963a62';
  popularEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  popularMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.popularEndpoint).subscribe(result => {
        resolve(result);
      });
    });
  }
  trendingMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.trendingMoviesEndpoint).subscribe(result => {
        resolve(result);
      });
    });
  }
}
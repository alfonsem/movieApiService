import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Servicio donde nos conectamos a la Api y cargamos los datos de las "movies"
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  //Estas direcciones las sacamos directamente del dominio donde nos conectamos, antes de hacerlo
  apiKey = 'f6c94084ee64e7faa69c7c4a2b963a62';
  popularEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;

  movieEndpoint = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`; 

  http: HttpClient;
  
  constructor(http: HttpClient) {
    this.http = http;
  }

  //Para cargar las "popular movies" con una promesa
  popularMovies() {
    return new Promise(resolve => {
      this.http.get(this.popularEndpoint).subscribe(result => {
        resolve(result);
      });
    });
  }

  //Para cargar las "trending movies" con una promesa
  trendingMovies() {
    return new Promise(resolve => {
      this.http.get(this.trendingMoviesEndpoint).subscribe(result => {
        resolve(result);
      });
    });
  }

  //Para recibir la dirección de las imagenes de las "movies"
  getImgDomain() {
    return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  }

  //Para recibir el id de la "movie"
  getMovie(id) {
    return new Promise(resolve => {
      this.http.get(this.movieEndpoint(id)).subscribe(result => {
        resolve(result);
      });
    });
  }
}
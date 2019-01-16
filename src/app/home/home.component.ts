import { Component, } from '@angular/core';
import { MoviesService } from '../movies.service'; //Importamos el servicio desde donde cargaremos las "movies"

@Component({
  selector: 'app-home', //
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  imgDomain: string;
  data: Array<object>;
  title: string = '';

  //Constructor de la clase donde cargamos el dominio de la imagen de cada "movie"
  constructor(private api: MoviesService) {
    this.imgDomain = api.getImgDomain();
    // console.log (this.imgDomain);
  }

  //Para cargar las "popular movies" a través del servicio "api."
  loadPopularMovies() {
    this.api.popularMovies().then((result: any) => {
      this.data = result.results;
      this.title = 'Popular movies';
    });
  }

  //Cargar las "trending movies" a través del servicio con "api."
  loadTrendingMovies() {
    this.api.trendingMovies().then((result: any) => {
      this.data = result.results;
      this.title = 'Trending movies';
    });
  }

  //Para limpiar el array de datos
  clean() {
    this.data = undefined;
  }

}

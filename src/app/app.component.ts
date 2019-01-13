import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgDomain = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  data: Array<object>;
  title: string = '';
  constructor(private api: MoviesService) {}
  loadPopularMovies() {
    this.api.popularMovies().then((result: any) => {
      this.data = result.results;
      this.title = 'Popular movies';
    });
  }
  loadTrendingMovies() {
    this.api.trendingMovies().then((result: any) => {
      this.data = result.results;
      this.title = 'Trending movies';
    });
  }
  clean() {
    this.data = undefined;
  }
}

import { Component, } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgDomain: string;
  data: Array<object>;
  title: string = '';
  constructor(private api: MoviesService) {
    this.imgDomain = api.getImgDomain();
    console.log (this.imgDomain);
  }
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

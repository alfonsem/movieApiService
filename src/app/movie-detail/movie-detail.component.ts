import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movieData: object;
  imgDomain: string;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {
    this.imgDomain = movieService.getImgDomain();
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(this.id).then(data => {
      this.movieData = data;
    });
  }

}

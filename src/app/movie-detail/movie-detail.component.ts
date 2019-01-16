import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'; //Importamos el servicio para cargar los datos de la "movie"
import { ActivatedRoute } from '@angular/router'; //Importamos para routear el link

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number;
  movieData: object;
  imgDomain: string;

  //Constructor de la clase donde cargamos el dominio de la imagen de la "movie"
  constructor(private movieService: MoviesService, private route: ActivatedRoute) {
    this.imgDomain = movieService.getImgDomain();
  }

  //Al inicio recogemos el id de "movie"
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(this.id).then(data => {
      this.movieData = data;
    });
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
=======
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
]
>>>>>>> nuevaRama

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    MovieComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutingModule
=======
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes)
>>>>>>> nuevaRama
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

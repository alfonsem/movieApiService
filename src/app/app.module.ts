import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

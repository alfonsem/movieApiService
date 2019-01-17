(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .movies {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: 1em;\n  }\n  \n  .movie {\n    width: 300px;\n    margin: 0.5em;\n  }\n  \n  .poster {\n    max-width: 300px;\n  }\n  \n  h1 {\n    height: 3em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .center {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 1em;\n    background-color: aqua;\n  }\n  button{\n      padding: 20px;\n      border-radius: 20px;\n      background-color: white;\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWlDTSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1vdmllcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG4gIFxuICAubW92aWUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDAuNWVtO1xuICB9XG4gIFxuICAucG9zdGVyIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG4gIFxuICBoMSB7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICB9XG4gIGJ1dHRvbntcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"center\">\n  <button (click)=\"loadPopularMovies()\">Películas populares</button>\n\n  <button (click)=\"loadTrendingMovies()\">Películas \"trending\"</button>\n\n  <button *ngIf=\"data\" (click)=\"clean()\">Borrar</button>\n</section>\n<section class=\"center2\" *ngIf=\"!data\">Sin resultados</section>\n\n<section *ngIf=\"data\">\n  <h1>{{ title }}</h1>\n  <div class=\"movies\">\n    <div class=\"movie\" *ngFor=\"let movie of data\">\n      <h1>{{ movie.title || movie.original_title || movie.name}}</h1>\n      <img class=\"poster\" src=\"{{ imgDomain + movie.poster_path }}\" alt=\"\" />\n    </div>\n  </div>\n</section> -->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'movie/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_7__["MovieDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)
            ],
            providers: [_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movies {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: 1em;\n  }\n  \n  .movie {\n    all: unset;\n    width: 300px;\n    margin: 0.5em;\n  }\n  \n  .poster {\n    max-width: 300px;\n  }\n  \n  h1 {\n    height: 3em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .center {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 1em;\n    background-color: aqua;\n  }\n  \n  button{\n      padding: 20px;\n      border-radius: 20px;\n      background-color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7R0FDZjs7RUFFRDtJQUNFLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjtHQUNyQjs7RUFDRDtJQUNFLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix1QkFBdUI7R0FDeEI7O0VBQ0Q7TUFDSSxjQUFjO01BQ2Qsb0JBQW9CO01BQ3BCLHdCQUF3QjtHQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG4gIFxuICAubW92aWUge1xuICAgIGFsbDogdW5zZXQ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogMC41ZW07XG4gIH1cbiAgXG4gIC5wb3N0ZXIge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIGgxIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gIH1cbiAgYnV0dG9ue1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  home works!\n</p> -->\n<section class=\"center\">\n  <button (click)=\"loadPopularMovies()\">Películas populares</button>\n\n  <button (click)=\"loadTrendingMovies()\">Películas \"trending\"</button>\n\n  <button *ngIf=\"data\" (click)=\"clean()\">Borrar</button>\n</section>\n<section class=\"center2\" *ngIf=\"!data\">Sin resultados</section>\n\n<!-- <pre>\n  {{ data | json }}\n</pre> -->\n\n<section *ngIf=\"data\">\n  <h1>{{ title }}</h1>\n  <div class=\"movies\">\n    <a routerLink=\"/movie/{{ movie.id }}\" class=\"movie\" *ngFor=\"let movie of data\">\n      <h1>{{ movie.title }}</h1>\n      <img class=\"poster\" src=\"{{ imgDomain + movie.poster_path }}\" alt=\"\" />\n    </a>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");


 //Importamos el servicio desde donde cargaremos las "movies"
var HomeComponent = /** @class */ (function () {
    //Constructor de la clase donde cargamos el dominio de la imagen de cada "movie"
    function HomeComponent(api) {
        this.api = api;
        this.title = '';
        this.imgDomain = api.getImgDomain();
        // console.log (this.imgDomain);
    }
    //Para cargar las "popular movies" a través del servicio "api."
    HomeComponent.prototype.loadPopularMovies = function () {
        var _this = this;
        this.api.popularMovies().then(function (result) {
            _this.data = result.results;
            _this.title = 'Popular movies';
        });
    };
    //Cargar las "trending movies" a través del servicio con "api."
    HomeComponent.prototype.loadTrendingMovies = function () {
        var _this = this;
        this.api.trendingMovies().then(function (result) {
            _this.data = result.results;
            _this.title = 'Trending movies';
        });
    };
    //Para limpiar el array de datos
    HomeComponent.prototype.clean = function () {
        this.data = undefined;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  movie-detail works! {{id}}\n  {{movieData | json}}\n</p> -->\n\n<div *ngIf=\"movieData\">\n  <h1>{{ movieData.title || movieData.original_title || movieData.original_name }}</h1>\n  <p>Language: {{ movieData.original_language }}</p>\n  <p>Popularity {{ movieData.popularity }}</p>\n  <p>{{ movieData.overview }}</p>\n  <ul>\n    <h2>Producers:</h2>\n    <li *ngFor=\"let producer of movieData.production_companies\">{{ producer.name }}</li>\n  </ul>\n  <img src=\"{{ imgDomain + movieData.backdrop_path }}\" alt=\"\" />\n</div>\n\n<h2 *ngIf=\"!movieData\">Id no encontrado</h2>\n<button ></button>\n"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


 //Importamos el servicio para cargar los datos de la "movie"
 //Importamos para routear el link
var MovieDetailComponent = /** @class */ (function () {
    //Constructor de la clase donde cargamos el dominio de la imagen de la "movie"
    function MovieDetailComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
        this.imgDomain = movieService.getImgDomain();
    }
    //Al inicio recogemos el id de "movie"
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        this.movieService.getMovie(this.id).then(function (data) {
            _this.movieData = data;
        });
    };
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/movies.service.ts":
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//Servicio donde nos conectamos a la Api y cargamos los datos de las "movies"
var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        var _this = this;
        //Estas direcciones las sacamos directamente del dominio donde nos conectamos, antes de hacerlo
        this.apiKey = 'f6c94084ee64e7faa69c7c4a2b963a62';
        this.popularEndpoint = "https://api.themoviedb.org/3/movie/popular?api_key=" + this.apiKey;
        this.trendingMoviesEndpoint = "https://api.themoviedb.org/3/trending/all/day?api_key=" + this.apiKey;
        this.movieEndpoint = function (id) { return "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + _this.apiKey; };
        this.http = http;
    }
    //Para cargar las "popular movies" con una promesa
    MoviesService.prototype.popularMovies = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.popularEndpoint).subscribe(function (result) {
                resolve(result);
            });
        });
    };
    //Para cargar las "trending movies" con una promesa
    MoviesService.prototype.trendingMovies = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.trendingMoviesEndpoint).subscribe(function (result) {
                resolve(result);
            });
        });
    };
    //Para recibir la dirección de las imagenes de las "movies"
    MoviesService.prototype.getImgDomain = function () {
        return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
    };
    //Para recibir el id de la "movie"
    MoviesService.prototype.getMovie = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.movieEndpoint(id)).subscribe(function (result) {
                resolve(result);
            });
        });
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alfonso/Documents/moviesApiService/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
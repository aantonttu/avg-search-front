import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  url = 'api/movies';
  pages: any[];
  moviesList: Movies[];
  moviesDisplayCounter: number;
  genre: string;
  pageNow: number;


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.pages = [];
    this.pageNow = 0;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getMoviesByGenre(this.activatedRoute);
    this.getMoviesData();
    this.moviesDisplayCounter = 0;
  }

  // tslint:disable-next-line:typedef
  getMoviesData() {
    this.moviesList = [];
    if (this.genre) {
      this.url += '/genres?genre=' + this.genre;
    }
    this.http.get<any>(this.url)
      .subscribe(data => {
        console.log(data);
        this.moviesList = data;
        this.pagesGenerator();
      });
  }

  // tslint:disable-next-line:typedef
  getMoviesByGenre(activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(data => {
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      if (data.genre) {
        this.genre = data.genre;

      }
    });
  }

  // tslint:disable-next-line:typedef
  pagesGenerator() {
    let counterOfMovies = 0;
    let counter = 0;
    let lis = [];
    while (counterOfMovies < this.moviesList.length) {
      lis = [];
      counter = 0;
      while (counter < 8 && counterOfMovies < this.moviesList.length) {
        lis.push(this.moviesList[counterOfMovies]);
        counter += 1;
        counterOfMovies += 1;
      }
      this.pages.push(lis);
    }
  }

  // tslint:disable-next-line:typedef
  pageMoving(direction) {
    if (direction === 'Previous') {
      if (this.pageNow > 0) {
        this.pageNow -= 1;
      }
    } else {
      if (this.pageNow < this.pages.length - 1) {
        this.pageNow += 1;
      }
    }
  }

}

interface Movies {
  id: number;
  name: string;
  description: string;
  producer: string;
  rating: number;
  imgUrl: string;
  genres: string;
}

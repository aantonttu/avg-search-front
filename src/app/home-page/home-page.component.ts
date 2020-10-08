import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  url = 'api/movies';
  moviesList1: Movies[];
  moviesList: Movies[];
  moviesDisplayCounter: number;
  genre: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
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
      });
  }

  // tslint:disable-next-line:typedef
  getMoviesByGenre(activatedRoute: ActivatedRoute){
    activatedRoute.queryParams.subscribe(data =>
    {
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      if (data.genre)
      {
        this.genre = data.genre;

      }
    });
    console.log(this.genre);
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

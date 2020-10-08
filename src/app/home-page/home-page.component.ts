import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getMoviesData();
    this.moviesDisplayCounter = 0;
  }

  // tslint:disable-next-line:typedef
  getMoviesData() {
    this.http.get<any>(this.url)
      .subscribe(data => {
        console.log(data);
        this.moviesList = data;
        // this.setMoviesFromHttp();
      });
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

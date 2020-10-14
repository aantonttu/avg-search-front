import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../movie';
import {Comment} from '../comment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {


  url = 'api/movies';
  movie: Movie;
  // tslint:disable-next-line:new-parens
  comment: Comment;
  username: string;
  commentText: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getMovie(this.activatedRoute);
  }


  // tslint:disable-next-line:typedef
  getMovie(activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(data => {
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      this.url += '/' + data.id;
      this.http.get<any>(this.url)
        .subscribe(dataMovie => {
          console.log(dataMovie);
          this.movie = dataMovie;
        });
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log('onSubmit in Item Form Component');
    console.log(this.username);
    console.log(this.commentText);
    console.log('/comments/' + this.movie.id);
    this.http.post('api/comments/' + this.movie.id,
      {
        commentText: this.commentText,
        userName: this.username
      }
      ).subscribe();
  }

}

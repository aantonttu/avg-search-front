import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../movie';
import {Comment} from '../comment';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {


  url = 'api/movies';
  movie: Movie;
  comment: Comment;
  commentText: string;

  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getMovie(this.activatedRoute);
  }

  // tslint:disable-next-line:typedef
  getRole() {
    return this.authService.currentUserValue != null;
  }

  // tslint:disable-next-line:typedef
  isAdmin() {
    if (this.getRole()) {
      return this.authService.currentUserValue.role === 'ADMIN';
    }
  }

  // tslint:disable-next-line:typedef
  getMovie(activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(data => {
      this.url += '/' + data.id;
      this.http.get<any>(this.url)
        .subscribe(dataMovie => {
          this.movie = dataMovie;
        });
    });
  }

  // tslint:disable-next-line:typedef
  onDeleteMovie(id) {
    this.http.delete('api/movies/' + id).subscribe(
      () => this.router.navigateByUrl('/')
    );
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const username = this.authService.currentUserValue.username;
    if (this.commentText != null) {
      this.http.post('api/movies/' + this.movie.id + '/comments',
        {
          commentText: this.commentText,
          userName: username
        }
      ).subscribe();
    }
  }

  // tslint:disable-next-line:typedef variable-name
  onDeleteComment(id) {
    this.http.delete('api/comments/' + id).subscribe();
  }
}

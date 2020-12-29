import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search: string;
  genres: any[];
  url = 'api/movies/genres';

  constructor(private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getAllGenres();
  }

  // tslint:disable-next-line:typedef
  checkLogin() {
    return this.authService.currentUserValue == null;
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
  }

  // tslint:disable-next-line:typedef
  getAllGenres() {
    this.http.get<any>(this.url)
      .subscribe(data => {
        this.genres = data;
      });
  }

  // tslint:disable-next-line:typedef
  isAdmin() {
    if (this.getRole()) {
      return this.authService.currentUserValue.role === 'ADMIN';
    }
  }

  // tslint:disable-next-line:typedef
  getRole() {
    return this.authService.currentUserValue != null;
  }
}

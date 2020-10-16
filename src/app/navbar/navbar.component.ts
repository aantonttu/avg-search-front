import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search: string;
  genres: any[];
  url = 'api/movies/genres';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllGenres();
  }

  // tslint:disable-next-line:typedef
  getAllGenres(){
    this.http.get<any>(this.url)
      .subscribe(data => {
        this.genres = data;
      });
  }
}

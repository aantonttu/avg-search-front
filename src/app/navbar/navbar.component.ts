import { Component, OnInit } from '@angular/core';
import { HomePageComponent} from '../home-page/home-page.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMoviesByGenre(this.activatedRoute);
  }

  // tslint:disable-next-line:typedef
  getMoviesByGenre(activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(data => {
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      console.log(data);
    });
  }
}

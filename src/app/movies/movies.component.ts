import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  url = 'api/movies';
  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  test: any;
  isEdit = false;

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    };
    this.options = ['ABS', 'AVTOPILOT', 'AVTO PARK'];
    this.test = 'Any type of data';
    this.getData();
  }

  // tslint:disable-next-line:typedef
  getData() {
    this.http.get(this.url)
      .subscribe(data => {
        console.log(data);
      });
  }

  // tslint:disable-next-line:typedef
  showEdit() {
    this.isEdit = !this.isEdit;
  }

  // tslint:disable-next-line:typedef
  carsSelect(carName) {
    // tslint:disable-next-line:triple-equals
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 3000;
      this.model = 'RS8SS';
      // tslint:disable-next-line:triple-equals
    } else if (carName == 'audi') {
      this.name = 'AUDI';
      this.speed = 2330;
      this.model = 'RTX2223';
    } else {
      this.name = 'Mercedes';
      this.speed = 2990;
      this.model = 'MRMSS2';
    }
  }

  // tslint:disable-next-line:typedef
  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  // tslint:disable-next-line:typedef
  deleteOpt(option) {
    for (let i = 0; i < this.options.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.options[i] == option) {
        this.options.splice(i, i);
        break;
      }
    }

  }

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}

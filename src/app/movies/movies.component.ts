import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];
  test:any;
  isEdit:boolean = false;

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    };
    this.options = ["ABS", "AVTOPILOT", "AVTO PARK"]
    this.test = "Any type of data"
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  carsSelect(carName) {
    if(carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 3000;
      this.model = 'RS8SS';
    } else if(carName == 'audi') {
      this.name = 'AUDI';
      this.speed = 2330;
      this.model = 'RTX2223';
    } else {
      this.name = 'Mercedes';
      this.speed = 2990;
      this.model = 'MRMSS2';
    }
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option) {
    for(let i = 0; i < this.options.length; i++) {
      if(this.options[i] == option) {
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

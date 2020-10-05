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
  moviesList1: Observable<any>[];
  moviesList: any[];

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getData();
    this.moviesList = [
      {
        id: 1,
        name: 'Alladin',
        description: 'Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.',
        img: 'https://cs7.pikabu.ru/post_img/big/2019/05/23/9/1558626426166757449.jpg'
      },
      {
        id: 2,
        name: 'WarCraft',
        description: 'Warcraft (alternatively known as Warcraft: The Beginning) is a 2016 American action fantasy film directed by Duncan Jones and written by Charles Leavitt and Jones. ... The film portrays the initial encounters between the humans and the orcs and takes place in a variety of locations established in the video game series.',
        img: 'https://img-fotki.yandex.ru/get/63971/6718465.91/0_14915e_2543e5c6_orig.jpg'
      },
      {
        id: 3,
        name: 'Alladin2',
        description: 'Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.',
        img: 'https://cs7.pikabu.ru/post_img/big/2019/05/23/9/1558626426166757449.jpg'
      },
      {
        id: 4,
        name: 'WarCraft',
        description: 'Warcraft (alternatively known as Warcraft: The Beginning) is a 2016 American action fantasy film directed by Duncan Jones and written by Charles Leavitt and Jones. ... The film portrays the initial encounters between the humans and the orcs and takes place in a variety of locations established in the video game series.',
        img: 'https://img-fotki.yandex.ru/get/63971/6718465.91/0_14915e_2543e5c6_orig.jpg'
      },
      {
        id: 5,
        name: 'Alladin2',
        description: 'Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing. Lorem ipsum dolor.',
        img: 'https://cs7.pikabu.ru/post_img/big/2019/05/23/9/1558626426166757449.jpg'
      },
      {
        id: 6,
        name: 'WarCraft',
        description: 'Warcraft (alternatively known as Warcraft: The Beginning) is a 2016 American action fantasy film directed by Duncan Jones and written by Charles Leavitt and Jones. ... The film portrays the initial encounters between the humans and the orcs and takes place in a variety of locations established in the video game series.',
        img: 'https://img-fotki.yandex.ru/get/63971/6718465.91/0_14915e_2543e5c6_orig.jpg'
      }
    ];
  }

  // tslint:disable-next-line:typedef
  getData() {
    this.http.get<any>(this.url)
      .subscribe(data => {
        this.moviesList1 = data;
        this.setMoviesFromHttp();
      });
  }

  // tslint:disable-next-line:typedef
  setMoviesFromHttp() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.moviesList1.length; i++) {
      this.moviesList.push(this.moviesList1[i]);
      console.log(this.moviesList1[i]);
    }
  }

}

// interface Movies {
//   id: number;
//   name: string;
//   description: string;
//   producer: string;
//   rating: number;
//   img: string;
// }

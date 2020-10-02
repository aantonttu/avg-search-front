import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  moviesList: Movies[];

  constructor() {
  }

  ngOnInit() {
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
    ]
  }

}

interface Movies {
  id: number;
  name: string;
  description: string;
  img: string;
}

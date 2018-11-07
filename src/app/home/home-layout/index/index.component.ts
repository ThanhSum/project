import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../Services/movie.service";
import $ from 'jquery'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  CarouselList = [
    {
      img: "../../../../assets/img/nhiem-vu-bat-kha-thi-sup-do-mission-impossible-fallout-c16-15326577639410.jpg",
      trailer: "https://www.youtube.com/embed/LHqjCiMJlfo"
    },
    {
      img: "../../../../assets/img/the-gioi-khung-long-vuong-quoc-sup-do-jurassic-world-fallen-kingdom-2018-poster.jpg",
      trailer: "https://www.youtube.com/embed/RFinNxS5KN4"
    },
    {
      img: "../../../../assets/img/nguoi-kien-va-chien-binh-ong-ant-man-and-the-wasp-c13-15308017332469.jpg",
      trailer: "https://www.youtube.com/embed/1HpZevFifuo"
    },

  ]

  constructor() {
  }

  ngOnInit() {

  }


}

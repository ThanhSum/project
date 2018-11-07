import {Component, Input, OnInit, ElementRef, Renderer2, HostListener} from '@angular/core';
import $ from 'jquery'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movieItem;
  constructor(private el: ElementRef,
              private renderer: Renderer2) {

  }

  ngOnInit() {
    $(document).ready(function () {
      $('.whats-on-peek__item').mouseenter(
        function () {
          $(this).addClass('active');
          $('.whats-on-peek__item').addClass('inactive');
        }
      );

      $('.whats-on-peek__item').mouseleave(
        function () {
          $(this).removeClass('active');
          $('.whats-on-peek__item').removeClass('inactive');
        },

      )


    })

  }
}

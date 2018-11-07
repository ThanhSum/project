import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieService} from "../../../Services/movie.service";
import {ActivatedRoute} from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {
  closeResult: string;
  choose: any = ''
  constructor(public movieService: MovieService, public route: ActivatedRoute,private modalService: NgbModal) {
  }

  MovieID: number;
  MovieDetail = null;
  MovieDetail_LichChieu: any;
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content, value) {
    this.modalService.open(content, { size: 'lg' });
    this.choose = value.Trailer;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }


  ngOnInit() {
    this.GetMovieDetail()
  }

  GetMovieDetail() {
    this.route.params.subscribe(
      (kq: any) => {
        this.MovieID = kq.id;
        this.movieService.GetMovieDetail(this.MovieID).subscribe(
          (kq: any) => {
            this.MovieDetail = kq;
            let trailer = this.MovieDetail.Trailer.split('watch?v=');
            trailer = `${trailer[0]}embed/${trailer[1]}`;
            this.MovieDetail.Trailer = trailer;
            console.log(this.MovieDetail);
            this.MovieDetail_LichChieu = this.MovieDetail.LichChieu.slice(1,6);
            console.log(this.MovieDetail_LichChieu);
          }
        )
      }
    )
  }

}

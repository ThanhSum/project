import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieService} from "../../../Services/movie.service";
import {Movie} from "../../../Models/movie";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhimSapChieuComponent implements OnInit {

  DanhSachPhim: Movie[] = [];
  DanhSachPhimSapChieu;
  phimItem;
  constructor(private phimService: MovieService, private modalService: NgbModal) { }

  ngOnInit() {
    this.phimService.GetMovieList().subscribe(
      (kq) => {
        this.DanhSachPhim = kq;
        this.DanhSachPhimSapChieu = this.DanhSachPhim.slice(18,24);
        console.log(this.DanhSachPhimSapChieu);
      }
    )
  }

  openLg(content, phim) {
    this.modalService.open(content, { size: 'lg' });
    this.phimItem = phim;
    let trailer = this.phimItem.Trailer.split('watch?v=');
    trailer = `${trailer[0]}embed/${trailer[1]}`;
    this.phimItem.Trailer = trailer;
  }

}

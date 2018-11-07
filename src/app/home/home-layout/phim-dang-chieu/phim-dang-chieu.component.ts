import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieService} from "../../../Services/movie.service";
import $ from 'jquery';
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhimDangChieuComponent implements OnInit {

  ListMovie: any[] = [];
  DanhSachPhimCanTim: any[] = [];
  DanhSachPhimHienThi: any[] = [];

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.GetMovieList();
  }

  GetMovieList() {
    this.movieService.GetMovieList().subscribe(
      (kq: any) => {
        this.ListMovie = kq;
        this.ListMovie = this.ListMovie.slice(1, 11);
        this.DanhSachPhimHienThi = this.ListMovie;
        /*lay tu phan tu thu 3 den phan tu thu 5, mang gom 3 movie*/
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  TimKiemPhimDangChieu(valueNhapVao) {
    for (let phim of this.ListMovie) {
      let phimNhapVao = valueNhapVao.toLowerCase()
      if (phimNhapVao == phim.TenPhim.toLowerCase()) {
        this.DanhSachPhimCanTim.push(phim);
      }
    }
    this.DanhSachPhimHienThi = this.DanhSachPhimCanTim;
  }
}

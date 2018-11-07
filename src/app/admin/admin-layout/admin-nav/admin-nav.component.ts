import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Movie} from "../../../Models/movie";
import {MovieService} from "../../../Services/movie.service";
import {TransferService} from "../../../Services/transfer.service";
import {User} from "../../../Models/user";
import {UserService} from "../../../Services/user.service";

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminNavComponent implements OnInit {

  User;
  TaiKhoan;
  DanhSachPhim: Movie[];
  DanhSachPhimCanTim: any [] =[];
  DanhSachNguoiDung: User[];
  DanhSachNguoiDungCanTim: any[] = [];

  constructor(private movieService: MovieService,
              private _transfer: TransferService,
              private userService: UserService) {
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.User = JSON.parse(localStorage.getItem('currentUser'))
      this.TaiKhoan = this.User.TaiKhoan;
    }
    this.movieService.GetMovieList().subscribe(
      (kq) =>{
        this.DanhSachPhim = kq;
      }
    )
    this.userService.LayDanhSachNguoiDung().subscribe(
      (kq) =>{
        this.DanhSachNguoiDung = kq;
      }
    )
  }

  DangXuat() {
    localStorage.clear();
    this.TaiKhoan = '';
  }
  TimPhim(valueNhapVao) {

    for (let phim of this.DanhSachPhim) {
      let phimNhapVao = valueNhapVao.toLowerCase()
      if (phimNhapVao == phim.TenPhim.toLowerCase()) {
        this.DanhSachPhimCanTim.push(phim);
      }
    }
    for (let nguoiDung of this.DanhSachNguoiDung) {
      let nguoiDungNhapVao = valueNhapVao.toLowerCase();
      if(nguoiDungNhapVao == nguoiDung.TaiKhoan.toLowerCase()){
        this.DanhSachNguoiDungCanTim.push(nguoiDung);
      }
    }
    this._transfer.transferPhimNavAdmin.next(this.DanhSachPhimCanTim);
    this._transfer.transferNguoiDungAdmin.next(this.DanhSachNguoiDungCanTim);
  }

}

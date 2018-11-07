import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieService} from "../../../Services/movie.service";
import {Movie} from "../../../Models/movie";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import swal from "sweetalert2";
import {TransferService} from "../../../Services/transfer.service";

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuanLyPhimComponent implements OnInit {

  closeResult: string;
  PhimCanSua;
  MaNhom: string = "GP03";
  DanhSachPhim: Movie[];
  DanhSachPhimHienThi: any[] = [];

  constructor(private phimService: MovieService, private modalService: NgbModal, private _transfer: TransferService) {
    this.phimService.GetMovieList().subscribe(
      (danhSachPhim) => {
        this.DanhSachPhim = danhSachPhim;
        this.DanhSachPhimHienThi = this.DanhSachPhim;
      }
    )
  }

  ngOnInit() {

    this._transfer.transferPhimNavAdmin.subscribe(
      (kq) => {
        // @ts-ignore
        this.DanhSachPhimHienThi = kq;
        console.log(this.DanhSachPhimHienThi);
      }
    )
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }

  SuaPhim(content, phim) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
    this.PhimCanSua = phim;
    console.log(this.PhimCanSua.MaPhim);
  }

  openSm(content) {
    this.modalService.open(content, {size: 'sm'});
  }

  openLg(content) {
    this.modalService.open(content, {size: 'lg'});
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, {centered: true});
  }

  DangKyPhim(phim, hinhAnh) {
    this.phimService.ThemPhim(phim).subscribe(
      (kq) => {
        this.phimService.UploadFile(hinhAnh[0], phim.TenPhim).subscribe(
          (kq) => {
            // @ts-ignore
            swal({
              title: 'THÊM PHIM THÀNH CÔNG',
              type: 'success',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-1',
              timer: 1000
            }, function () {
              swal.close();
            })
          },
          (error) => {
            console.log(error);
          }
        )
      }
    )

  }

  XoaPhim(maPhim) {
    this.phimService.XoaPhim(maPhim).subscribe(
      (kq) => {
        // @ts-ignore
        swal({
          title: 'BẠN CHẮC CHẮN MUỐN XÓA?',
          text: "XÓA XONG KHÔNG THỂ KHÔI PHỤC",
          type: 'warning',
          showCancelButton: true,
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-1',
          cancelButtonClass: 'btn btn-outline-warning',
          confirmButtonText: 'TÔI MUỐN XÓA'
        }).then((result) => {
          if (result.value) {
            swal({
                title: 'ĐÃ XÓA',
                text: 'XÓA THÀNH CÔNG',
                type: 'success',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-1',
              }
            )
          }
        })
      },
      (error) => {
        console.log(error);
      }
    )
  }

  CapNhatPhim(phimCanSua, hinhAnh) {
    this.phimService.CapNhatPhim(phimCanSua).subscribe(
      (kq) => {
        // @ts-ignore
        swal({
          title: 'CẬP NHẬT PHIM THÀNH CÔNG',
          type: 'success',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-1',
          timer: 1000
        }, function () {
          swal.close();
        })
        this.phimService.UploadFile(hinhAnh[0], phimCanSua.TenPhim).subscribe(
          (kq) => {
            console.log(kq);
          }
        )
      },
      (err) => {
        console.log(err);
      }
    )
  }

  EditMovie(value: any, hinhAnh) {
    console.log(hinhAnh[0]);
    console.log(value.TenPhim);
    this.phimService.CapNhatPhim(value).subscribe(
      (kq) => {
        swal({
          title: 'CẬP NHẬT THÀNH CÔNG',
          type: 'success',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-1',
          timer: 1000
        })
        this.phimService.UploadFile(hinhAnh[0], value.TenPhim).subscribe(
          (kq) => {

          }
        )
      }
    )
  }
}

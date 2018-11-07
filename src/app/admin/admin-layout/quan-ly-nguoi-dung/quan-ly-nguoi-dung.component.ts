import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {User} from "../../../Models/user";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TransferService} from "../../../Services/transfer.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuanLyNguoiDungComponent implements OnInit {

  ValueQuanTri: string = 'QuanTri';
  ValueKhachHang: string = 'KhachHang';
  MaNhom: string = "GP01";
  closeResult: string;
  DanhSachNguoiDung: any[] = [];
  NguoiDungCanSua;
  DanhSachNguoiDungHienThi: any[] = [];

  constructor(private nguoiDungService: UserService,
              private modalService: NgbModal,
              private _transfer: TransferService) {
    this.nguoiDungService.LayDanhSachNguoiDung().subscribe(
      (danhSachNguoiDung) => {
        this.DanhSachNguoiDung = danhSachNguoiDung;
        this.DanhSachNguoiDungHienThi = this.DanhSachNguoiDung;
      }
    )
  }

  ngOnInit() {
    this._transfer.transferNguoiDungAdmin.subscribe(
      (kq) => {
        console.log(kq);
        // @ts-ignore
        this.DanhSachNguoiDungHienThi = kq;
      }
    )
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }


  openModal(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }

  Them(nguoiDung) {
    console.log(nguoiDung);
    this.nguoiDungService.SignUp(nguoiDung).subscribe(
      (kq) => {
        console.log(kq);
        swal({
          title: 'THÊM NGƯỜI DÙNG THÀNH CÔNG',
          type: 'success',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-1',
          timer: 1000
        })
      }
    )
  }

  SuaNguoiDung(suaNguoiDungModal, nguoiDung) {
    this.NguoiDungCanSua = nguoiDung;
    this.modalService.open(suaNguoiDungModal, {windowClass: 'dark-modal'});
  }

  CapNhatNguoiDung(nguoiDung) {
    this.nguoiDungService.CapNhatNguoiDung(nguoiDung).subscribe(
      (kq) => {
        swal({
          title: 'CẬP NHẬT NGƯỜI DÙNG THÀNH CÔNG',
          type: 'success',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-1',
          timer: 1000
        })
      }
    )
  }

  XoaNguoiDung(taiKhoan) {
    this.nguoiDungService.XoaNguoiDung(taiKhoan).subscribe(
      (kq) => {
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
      }
    )
  }
}

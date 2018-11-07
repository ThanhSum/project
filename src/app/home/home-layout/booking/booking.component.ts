import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookingService} from "../../../Services/booking.service";
import {Ve} from "../../../Models/ve";
import {TransferService} from "../../../Services/transfer.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public maLichChieu: string;
  public danhSachGhe: any[] = [];
  public ttGheChon;
  public DanhSachVeDaChon: any[] = [];
  public userInfo;
  public SoLuongGheDaChon = 0;
  public TongTien;
  public TrangThaiBooking;


  constructor(private _activatedRoute: ActivatedRoute,
              private _bookingService: BookingService,
              private _transferService: TransferService,
  ) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      (kq: any) => {
        this.maLichChieu = kq.malichchieu;
        this._bookingService.LayChiTietPhongVe(this.maLichChieu).subscribe(
          (kq) => {
            this.danhSachGhe = kq.DanhSachGhe;
            console.log(this.danhSachGhe);
          }
        )
      }
    )

    this._transferService.transferGheItem.subscribe(
      (kq) => {
        this.ttGheChon = kq;
        if (this.ttGheChon.TrangThai) {
          this.DanhSachVeDaChon.push(this.ttGheChon.ChiTiet);
          this.SoLuongGheDaChon++;
          this.TongTien = this.SoLuongGheDaChon * this.ttGheChon.ChiTiet.GiaVe
          if (this.SoLuongGheDaChon > 8) {
            swal({
              title: 'ĐẶT QUÁ NHIỀU VÉ',
              type: 'error',
              buttonsStyling: false,
              confirmButtonClass: 'btn btn-1',
              cancelButtonClass: 'btn'
            });
            this.SoLuongGheDaChon = 0;
            this.TongTien = 0;
            this.DanhSachVeDaChon = [];
            this.TrangThaiBooking = false;
            this._transferService.transferTrangThaiBooking.next(this.TrangThaiBooking)

          }

        }
        else {
          for (let i in this.DanhSachVeDaChon) {
            if (this.DanhSachVeDaChon[i].MaGhe == this.ttGheChon.ChiTiet.MaGhe) {
              this.DanhSachVeDaChon.splice(Number(i), 1);
              this.SoLuongGheDaChon--;
              this.TongTien = this.SoLuongGheDaChon * this.ttGheChon.ChiTiet.GiaVe
            }
          }
        }
        console.log(this.SoLuongGheDaChon);
      }
    )
  }

  DatVe() {
    if (localStorage.getItem('currentUser')) {
      let userInfo = JSON.parse(localStorage.getItem('currentUser'));
      this.userInfo = userInfo;
    }
    let ttChiTietDatVe = {
      MaLichChieu: this.maLichChieu,
      TaiKhoanNguoiDung: this.userInfo.TaiKhoan,
      DanhSachVe: this.DanhSachVeDaChon,
    }
    console.log(this.DanhSachVeDaChon);
    if (this.SoLuongGheDaChon > 0) {
      this._bookingService.DatVe(ttChiTietDatVe).subscribe(
        (kq) => {
          console.log(kq);
          swal({
            title: 'ĐẶT VÉ THÀNH CÔNG',
            type: 'success',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-1',
            cancelButtonClass: 'btn'
          })
        },
        (error) => {
          console.log(error);
        }
      )
    }
    else {
      swal({
        title: 'VUI LÒNG CHỌN GHẾ',
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-1',
        timer: 1000
      })
    }
  }

}

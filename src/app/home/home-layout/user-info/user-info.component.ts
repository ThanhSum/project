import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {BookingService} from "../../../Services/booking.service";
import {User} from "../../../Models/user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public currentUser;
  public DanhSachVeDaDat: any[] = [];
  public TaiKhoan

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = user;
      console.log(this.currentUser);
    }
    this.bookingService.LayLichSuDatVe(this.currentUser.TaiKhoan).subscribe(
      (kq) => {
        this.DanhSachVeDaDat = kq.DanhSachVeDaDat;
        this.TaiKhoan = kq.TaiKhoan

      }
    )
  }
}

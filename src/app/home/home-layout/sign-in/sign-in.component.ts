import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TransferService} from "../../../Services/transfer.service";
import {User} from "../../../Models/user";
import swal from "sweetalert2";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  _currentUser;

  constructor(private userService: UserService, private _router: Router, private _transfer: TransferService) {
  }

  ngOnInit() {
  }

  Login(value: any) {
    this.userService.Login(value).subscribe(
      (kq: any) => {
        if (typeof(kq) == 'object') {
          localStorage.setItem('currentUser', JSON.stringify(kq));
          this._currentUser = kq;
          if(this._currentUser.MaLoaiNguoiDung == 'QuanTri'){
            this._router.navigate(['/admin/phim'])
          }
         else {
            this._router.navigate(['/home']);
          }

        }
        else {
          swal({
            title: 'TÀI KHOẢN, MẬT KHẨU KHÔNG ĐÚNG!',
            type: 'warning',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-1',
            cancelButtonClass: 'btn'
          })
        }

      },
      (error: any) => {
        console.log(error);
      }
    )
  }




}

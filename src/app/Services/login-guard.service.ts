import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {CanActivate, Router} from "@angular/router";
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private _authen: AuthenticationService, private _router: Router) {
  }

  canActivate() {
    this._authen.checkLogin();
    if (this._authen.isLogin) {
      return true;
    }
    else {
      swal({
        title: 'VUI LÒNG ĐĂNG NHẬP ĐỂ ĐẶT VÉ',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-1',
        timer: 2000
      })
      this._router.navigate(['/home/signin'])
    }
  }

}

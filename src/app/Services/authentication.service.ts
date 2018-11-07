import {Injectable} from '@angular/core';
import {Route} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLogin: boolean = false;
  isAdmin: boolean = false;

  constructor() {
  }

  checkLogin() {

    var currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      this.isLogin = true;
      return true
    }
    else {
      this.isLogin = false;
      return false;
    }
  }

  checkAdmin() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.checkLogin()) {
      if (currentUser.MaLoaiNguoiDung == 'QuanTri') {
        this.isAdmin = true;
      }
    }
  }


}

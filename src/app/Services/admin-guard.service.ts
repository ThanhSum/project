import {Injectable} from '@angular/core';
import {CanLoad, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanLoad {

  constructor(private _authen: AuthenticationService, private _router: Router) {
  }

  canLoad() {
    this._authen.checkAdmin();
    if (this._authen.isAdmin) {
      return true;
    }
    else {
      swal({
        title: 'BẠN KHÔNG CÓ QUYỀN TRUY CẬP',
        type: 'error',
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-1',
        cancelButtonClass: 'btn'
      })
      this._router.navigate(['/home'])
    }
    return false;
  }

}

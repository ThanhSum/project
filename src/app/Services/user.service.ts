import {Injectable} from '@angular/core';
import {User} from "../Models/user";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: Http) {
  }

  SignUp(user: User) {
    var api = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    var headerSignUp = new Headers();
    headerSignUp.append('Content-Type', 'application/json;charset=UTF-8');
    var obServe: Observable<any> = this._http.post(api, user, {headers: headerSignUp}).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  Login(user: {TaiKhoan, MatKhau}){
    var api = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`;
    var headerLogin = new Headers();
    headerLogin.append('Content-Type', 'application/json;charset=UTF-8');
    var obServe: Observable<any> = this._http.post(api, user).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  LayDanhSachNguoiDung(){
    var api =`http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    var obServe: Observable<any> = this._http.get(api).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  CapNhatNguoiDung(nguoiDung){
    var api =`http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    var headerCapNhat = new Headers();
    headerCapNhat.append('Content-Type', 'application/json;charset=UTF-8');
    var obServe: Observable<any> = this._http.post(api, nguoiDung).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  XoaNguoiDung(taiKhoan){
    var api =`http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    var obServe: Observable<any> = this._http.delete(api, taiKhoan).pipe(map((result: Response) => result.json()));
    return obServe;
  }

}

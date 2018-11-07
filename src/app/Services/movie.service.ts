import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Headers, Http} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: Http) { }
  GetMovieList(){
    var api = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03`;
    var obServe: Observable<any> = this._http.get(api).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  GetMovieDetail(id){
    var api = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;
    var obServe: Observable<any> = this._http.get(api).pipe(map((result: Response) => result.json()));
    return obServe;
  }

  ThemPhim(phim) {
    var api = `http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    var headerThemPhim = new Headers();
    headerThemPhim.append('Content-Type', 'application/json;charset=UTF-8');
    var obServe: Observable<any> = this._http.post(api, phim).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  UploadFile(fileAnh, tenPhim){
    var api= `http://sv2.myclass.vn/api/QuanLyPhim/UploadFile`;
    var formData = new FormData();
    formData.append('Files',fileAnh);
    formData.append('TenPhim',tenPhim);
    var obServe: Observable<any> = this._http.post(api, formData).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  CapNhatPhim(phim){
    var api =`http://sv2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    var headerCapNhatPhim = new Headers();
    headerCapNhatPhim.append('Content-Type', 'application/json;charset=UTF-8');
    var obServe: Observable<any> = this._http.post(api, phim).pipe(map((result: Response) => result.json()));
    return obServe;
  }
  XoaPhim(maPhim){
    var api = `http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    var obServe: Observable<any> = this._http.delete(api, maPhim).pipe(map((result: Response) => result.json()));
    return obServe;
  }
}

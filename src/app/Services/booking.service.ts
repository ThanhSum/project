import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http: Http) {
  }

  LayChiTietPhongVe(maLichChieu) {
    var api = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    var obServe: Observable<any> = this._http.get(api).pipe(map((result: Response) => result.json()));
    return obServe;
  }

  DatVe(ve) {
    var api = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    var obServe: Observable<any> = this._http.post(api, ve).pipe(map((result: Response) => result.json()));
    return obServe;
  }

  LayLichSuDatVe(taiKhoan) {
    var api = `http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${taiKhoan}`;
    var obServe: Observable<any> = this._http.post(api, taiKhoan).pipe(map((result: Response) => result.json()));
    return obServe;
  }

}

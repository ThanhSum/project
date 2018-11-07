import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  transferUser = new  Subject();
  transferGheItem = new Subject();
  transferTrangThaiBooking = new Subject();
  transferPhimNavAdmin = new Subject();
  transferNguoiDungAdmin = new  Subject();
  constructor() { }
}

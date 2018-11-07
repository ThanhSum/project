import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ve} from "../../../../../Models/ve";
import {BookingService} from "../../../../../Services/booking.service";
import {TransferService} from "../../../../../Services/transfer.service";


@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.css']
})
export class SeatItemComponent implements OnInit {

  TrangThaiDatGhe: boolean = false;
  @Input() gheItem: any;
  @Output() eventDatGhe = new EventEmitter();
  public ThongTinGheChon = {};

  constructor(private _transfer: TransferService) {
  }

  ngOnInit() {
    this.TrangThaiDatGhe = this.gheItem.DaDat;
    this._transfer.transferTrangThaiBooking.subscribe(
      (kq) =>{
        // @ts-ignore
        this.TrangThaiDatGhe = kq;
      }
    )
  }

  DatGhe() {
    this.TrangThaiDatGhe = !this.TrangThaiDatGhe;
    // let ttGhe = {
    //   TrangThai: this.TrangThaiDatGhe,
    //   ChiTiet: {
    //     MaGhe: this.gheItem.MaGhe,
    //     GiaVe: this.gheItem.GiaVe
    //   }
    // }
    // this.eventDatGhe.emit(ttGhe)
    this.ThongTinGheChon = {
      TrangThai: this.TrangThaiDatGhe,
      ChiTiet: {
        MaGhe: this.gheItem.MaGhe,
        GiaVe: this.gheItem.GiaVe,
        TenGhe: this.gheItem.TenGhe,
      }
    }
    this._transfer.transferGheItem.next(this.ThongTinGheChon);
  }
}

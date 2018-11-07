import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookingService} from "../../../../Services/booking.service";

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {

  @Input() danhSachGhe: any[] = [];
  @Output() emitDanhSachGheChon = new EventEmitter();
  DanhSachGheChon: any[] = [];

  constructor(private  _bookingService: BookingService) {
  }

  ngOnInit() {

  }
}

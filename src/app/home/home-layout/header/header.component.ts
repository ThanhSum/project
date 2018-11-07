import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransferService} from "../../../Services/transfer.service";
import {User} from "../../../Models/user";
import $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public CurrentUser ={};
  public TaiKhoan;
  constructor(private _transfer: TransferService) {
  }

  ngOnInit() {
    this.getCurrentUser();
    $(document).ready(function () {
      $('.liHeader').click(
        function () {
          $('.liHeader').removeClass('active');
          $(this).addClass('active');

        }
      );

    })

  }

  getCurrentUser() {
    if (localStorage.getItem('currentUser')) {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.CurrentUser = currentUser;
      this.TaiKhoan = currentUser.TaiKhoan;
      return this.TaiKhoan
    }
  }

  LogOut() {
    localStorage.clear();
    this.TaiKhoan = '';
  }

}

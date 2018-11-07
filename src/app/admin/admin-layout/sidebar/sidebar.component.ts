import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  User;
  TaiKhoan;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.User = JSON.parse(localStorage.getItem('currentUser'))
      this.TaiKhoan = this.User.TaiKhoan;
    }
  }

}

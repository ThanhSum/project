import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminLayoutComponent} from "../admin-layout/admin-layout.component";
import {QuanLyPhimComponent} from "../admin-layout/quan-ly-phim/quan-ly-phim.component";
import {QuanLyNguoiDungComponent} from "../admin-layout/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component";
import {AdminGuardService} from "../../Services/admin-guard.service";

const adminRoute: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: 'phim', component: QuanLyPhimComponent},
      {path: 'nguoidung', component: QuanLyNguoiDungComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoute)
  ],
  declarations: []
})
export class AdminRoutingModule {
}

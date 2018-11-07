import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { QuanLyPhimComponent} from './admin-layout/quan-ly-phim/quan-ly-phim.component';
import {AdminRoutingModule} from "./admin-routing/admin-routing.module";
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatOptionModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatTabsModule
} from "@angular/material";
import { QuanLyNguoiDungComponent } from './admin-layout/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import {PhimDangChieuComponent} from "../home/home-layout/phim-dang-chieu/phim-dang-chieu.component";
import { NgbDatepickerModule, NgbModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbdModalOptions} from "../home/home-layout/carousel/modal-options";
import {FormsModule} from "@angular/forms";
import {SweetAlert2Module} from "@toverux/ngx-sweetalert2";
import {SharedModule} from "../shared/shared.module";
import { AdminNavComponent } from './admin-layout/admin-nav/admin-nav.component';
import {MatSharedModule} from "../mat-shared/mat-shared.module";

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    NgbModalModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatOptionModule,
    MatTabsModule,
    SweetAlert2Module,
    MatSharedModule

  ],
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    QuanLyPhimComponent,
    QuanLyNguoiDungComponent,
    AdminNavComponent,
  ],
  exports: [
    AdminLayoutComponent,
    SidebarComponent,
    QuanLyPhimComponent,
    QuanLyNguoiDungComponent,
    AdminNavComponent

  ],
})
export class AdminModule { }

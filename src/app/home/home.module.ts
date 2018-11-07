import {NgModule, Pipe} from '@angular/core';
import {HomeLayoutComponent} from './home-layout/home-layout.component';
import {IndexComponent} from './home-layout/index/index.component';
import {SignUpComponent} from './home-layout/sign-up/sign-up.component';
import {SignInComponent} from './home-layout/sign-in/sign-in.component';
import {HeaderComponent} from './home-layout/header/header.component';
import {MatSharedModule} from "../mat-shared/mat-shared.module";
import {DetailComponent} from "./home-layout/detail/detail.component";
import {MovieComponent} from './home-layout/index/movie/movie.component';
import {BookingComponent} from './home-layout/booking/booking.component';
import {SeatListComponent} from './home-layout/booking/seat-list/seat-list.component';
import {SeatItemComponent} from './home-layout/booking/seat-list/seat-item/seat-item.component';
import {ButtonsModule, MDBBootstrapModule, WavesModule} from "angular-bootstrap-md";
import {CarouselComponent} from './home-layout/carousel/carousel.component';
import {NgbModal, NgbModalModule, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {NgbdModalOptions} from "./home-layout/carousel/modal-options";
import {MatTabGroup, MatTabsModule} from "@angular/material";
import {SafePipe} from "../safe.pipe";
import {UserInfoComponent} from './home-layout/user-info/user-info.component';
import {FormControl, FormsModule, NgForm} from "@angular/forms";
import {HomeRoutingModule} from "./home-routing/home-routing.module";
import {PhimDangChieuComponent} from './home-layout/phim-dang-chieu/phim-dang-chieu.component';
import {SweetAlert2Module} from "@toverux/ngx-sweetalert2";
import {FooterComponent} from './home-layout/footer/footer.component';
import {PhimSapChieuComponent} from './home-layout/phim-sap-chieu/phim-sap-chieu.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    SharedModule,
    MatSharedModule,
    MDBBootstrapModule,
    WavesModule,
    ButtonsModule,
    NgbModalModule,
    MatTabsModule,
    FormsModule,
    HomeRoutingModule,
    SweetAlert2Module
  ],
  declarations: [
    HomeLayoutComponent,
    IndexComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    DetailComponent,
    MovieComponent,
    BookingComponent,
    SeatListComponent,
    SeatItemComponent,
    CarouselComponent,
    NgbdModalOptions,
    SafePipe,
    UserInfoComponent,
    PhimDangChieuComponent,
    FooterComponent,
    PhimSapChieuComponent,

  ],
  exports: [HomeLayoutComponent,
    IndexComponent,
    SignUpComponent,
    SignInComponent,
    DetailComponent,
    MovieComponent,
    CarouselComponent,
    NgbdModalOptions,
    SafePipe,
    UserInfoComponent,
    HomeRoutingModule,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    FooterComponent

  ],
})
export class HomeModule {
}

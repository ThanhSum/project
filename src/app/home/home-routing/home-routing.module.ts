import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeLayoutComponent} from "../home-layout/home-layout.component";
import {IndexComponent} from "../home-layout/index/index.component";
import {MovieComponent} from "../home-layout/index/movie/movie.component";
import {UserInfoComponent} from "../home-layout/user-info/user-info.component";
import {SignInComponent} from "../home-layout/sign-in/sign-in.component";
import {SignUpComponent} from "../home-layout/sign-up/sign-up.component";
import {DetailComponent} from "../home-layout/detail/detail.component";
import {BookingComponent} from "../home-layout/booking/booking.component";
import {SeatListComponent} from "../home-layout/booking/seat-list/seat-list.component";
import {SeatItemComponent} from "../home-layout/booking/seat-list/seat-item/seat-item.component";
import {PhimDangChieuComponent} from "../home-layout/phim-dang-chieu/phim-dang-chieu.component";
import {LoginGuardService} from "../../Services/login-guard.service";
import {PhimSapChieuComponent} from "../home-layout/phim-sap-chieu/phim-sap-chieu.component";
import {CarouselComponent} from "../home-layout/carousel/carousel.component";

const homeRoute: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      {path: '', component: IndexComponent},
      {path: 'phimdangchieu', component: PhimDangChieuComponent},
      {path: 'phimsapchieu', component: PhimSapChieuComponent},
      {path: 'carousel', component: CarouselComponent},
      {path: 'user', component: UserInfoComponent},
      {path: 'signin', component: SignInComponent},
      {path: 'signup', component: SignUpComponent},
      {path: 'detail/:id', component: DetailComponent},
      {
        path: 'booking/:malichchieu', component: BookingComponent, children: [
          {
            path: 'seatlist', component: SeatListComponent, children: [
              {path: 'seatitem', component: SeatItemComponent}
            ]
          }
        ], canActivate: [LoginGuardService]
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoute)
  ],
  declarations: []
})
export class HomeRoutingModule {
}

import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeLayoutComponent} from "../home/home-layout/home-layout.component";
import {AdminLayoutComponent} from "../admin/admin-layout/admin-layout.component";
import {AdminGuardService} from "../Services/admin-guard.service";


const appRoute: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: '../home/home.module#HomeModule',
    data: {preload: true}
  },
  {
    path: 'admin',
    data: {preload: true},
    loadChildren: '../admin/admin.module#AdminModule',
    canLoad: [AdminGuardService]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute,
      {
        preloadingStrategy: PreloadAllModules
      })
  ],
  providers: [PreloadAllModules],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {
}

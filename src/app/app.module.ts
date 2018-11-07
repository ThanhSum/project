import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RoutingModule} from "./routing/routing.module";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SafePipe } from './safe.pipe';
import {SharedModule} from "./shared/shared.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


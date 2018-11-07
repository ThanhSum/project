import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {UserService} from "../../../Services/user.service";
import {Route, Router} from "@angular/router";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService, private _router: Router) {
  }
  ngOnInit() {
  }
  SignUp(value: any) {
    value.MaNhom = 'GP01';
    this.userService.SignUp(value).subscribe(
      (kq: any) => {
        this._router.navigate(['/signin']);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}

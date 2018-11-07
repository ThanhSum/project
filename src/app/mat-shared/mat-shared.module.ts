import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class MatSharedModule {
}

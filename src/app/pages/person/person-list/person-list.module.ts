import { ModalComponent } from './../../modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListRoutingModule } from './person-list-routing.module';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonListRoutingModule,
    BrowserModule
  ]
})
export class PersonListModule { }

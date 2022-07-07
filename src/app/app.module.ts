import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './pages/person/person-list/person-list.component';
import { ModalComponent } from './pages/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    AppRoutingModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

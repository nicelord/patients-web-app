import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import {HttpClientModule} from "@angular/common/http";
import {RouteRoutingModule} from "./route/route-routing.module";
import {FormsModule} from "@angular/forms";
import { CreatePatientsComponent } from './create-patients/create-patients.component';
import { UpdatePatientsComponent } from './update-patients/update-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    CreatePatientsComponent,
    UpdatePatientsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

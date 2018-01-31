import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './/app-routing.module';
import { SalesComponent } from './sales/sales.component';
import { DateComponent } from './date/date.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapComponent,
    ContactComponent,
    SalesComponent,
    DateComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuSBrONzdoZ_EPoWhM8btDW-Er7oldCIU'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

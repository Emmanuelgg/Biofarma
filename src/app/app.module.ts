import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuSBrONzdoZ_EPoWhM8btDW-Er7oldCIU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

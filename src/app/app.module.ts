import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';





// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

// Import material.angular
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
         MatSortModule, MatTableModule } from "@angular/material";
// Import Dialog module
import {MatDialogModule} from '@angular/material/dialog';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//import materil.angular animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Import dialog module
import { DialogsModule } from './dialogs/dialogs.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './/app-routing.module';

//Import component
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuSBrONzdoZ_EPoWhM8btDW-Er7oldCIU'
    }),
    HttpModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    DialogsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
      DataService,
      Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

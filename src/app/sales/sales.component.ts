import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { DataService } from '../data.service';

import {Main} from '../main'

declare var jquery:any;
declare var $ :any


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  main: any = new Main;
  products: Array<any>;
  @ViewChildren('imagesProducts') carousel: QueryList<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {

    // Access the Data Service's getProducts() method we defined
    this._dataService.getProducts()
        .subscribe(res => this.products = res);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.carousel.changes.subscribe(t => {
      this.ngForRendred();
    })
  }

  ngForRendred() {
    this.initSales();
  }

  initSales(){
     $('.materialboxed').materialbox();
  }

}

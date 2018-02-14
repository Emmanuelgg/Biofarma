import { Component, OnInit, ViewChildren, QueryList} from '@angular/core';

import {AppComponent} from "../app.component";

import {Main} from "../main";

import { DataService } from '../data.service';

declare var jquery:any;
declare var $ :any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  main: any = new Main;
  products: Array<any>;
  @ViewChildren('carousel-item') carousel: QueryList<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getTable('get','products',{_id:-1},4)
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
    this.initDashboard();
  }

  initDashboard(){
    this.initCarousel();
  }

  initCarousel(){
    $('.carousel.carousel-slider').carousel({fullWidth: true, duration: 400});
    function autoplay() {
        setTimeout(autoplay, 6500);
        $('.carousel').carousel('next');
    }
    autoplay();
  }

}

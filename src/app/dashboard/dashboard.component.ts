import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";

declare var jquery:any;
declare var $ :any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initCarousel();
  }

  initCarousel(){
    $('.carousel.carousel-slider').carousel({fullWidth: true, duration: 350});
    function autoplay() {
        setTimeout(autoplay, 5000);
        $('.carousel').carousel('next');
    }
    autoplay();
  }

}

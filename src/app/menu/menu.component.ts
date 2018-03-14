import { Component, OnInit, Input } from '@angular/core';
import { Main } from '../main';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  main: any = new Main;

  constructor() {

  }

  ngOnInit() {
    $(".button-collapse").sideNav();
    this.activeMenu();
  }

  activeMenu() {
      $('.nav-wrapper').on('click','li',function(e){
          $('.nav-wrapper li').removeClass('active');
          $(this).addClass('active');
      });
      $('.nav-wrapper').on('click','.brand-logo',function(e){
          $('.nav-wrapper li').removeClass('active');
          $('.nav-wrapper li:first-child').addClass('active');
      });
  }

}

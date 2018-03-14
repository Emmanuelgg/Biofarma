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

  }

  ngAfterViewInit() {
      $(".button-collapse").sideNav();

      $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false, // Does not change width of dropdown to that of the activator
          hover: false, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
          stopPropagation: false // Stops event propagation
      });
  }

}

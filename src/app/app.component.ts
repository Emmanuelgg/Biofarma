import { Component } from '@angular/core';

// import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BIO FARMA';
  pathLogo: string = './assets/images/biofarma-logo.jpg';
  mainColor = 'teal accent-3';
  footerColor = 'teal accent-4';
  iconColor = 'grey darken-4';
  faceBiofarma = 'https://www.facebook.com/BIO-FARMA-1954345004809328';

}

import { Injectable } from '@angular/core';

import { Main } from './main';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  main: any = new Main;
  result:any;

  constructor(private _http: Http) { }

  getProducts() {
    return this._http.get(this.main.pathDB+"products")
      .map(result => this.result = result.json().response.data);
  }

}

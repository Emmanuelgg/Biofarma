import { Injectable } from '@angular/core';

import { Main } from './main';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  main: any = new Main;
  result:any;

  constructor(private _http: Http) { }

  addToTable(url:string, form:any, collectionName:string) : Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {form:form,collectionName:collectionName};
    return this._http.post(this.main.pathDB+url, data, options)
      .map(result => this.result = result.json().response);
  }

  getTable(url:string,collectionName:string,order:any,limit) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var data = {collectionName:collectionName, limit:limit, order:order};
    return this._http.post(this.main.pathDB+url,data,options)
      .map(result => this.result = result.json().response.data);
  }

  getLastProducts() {
    return this._http.get(this.main.pathDB+"lastProducts")
      .map(result => this.result = result.json().response.data);
  }

  uploadFiles(files:any) {
    return this._http.post(this.main.pathDB+"uploadFiles",files)
      .map(result => this.result = result.json().response.data);
  }

  // addProduct(form:any) : Observable<any> {
  //   console.log(form);
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this._http.post(this.main.pathDB+"addProduct", form, options)
  //     .map(result => this.result = result.json().response.data);
  // }



}

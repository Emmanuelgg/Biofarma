import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { NgForm } from '@angular/forms';

import { CurrencyPipe } from '@angular/common';

import { Main } from '../main';

import { Methods } from '../methods'

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  main: any = new Main;
  methods: any;
  valueCurrency : string = '0';
  files: FileList;
  response: any;


  constructor(private _dataService: DataService) {
      this.methods = new Methods(_dataService);
  }

  ngOnInit() {

  }

  onChange(searchValue : string ) {
      if(searchValue.substring(0,1)=='$')
          this.valueCurrency = searchValue.substring(1);
      else
          this.valueCurrency = searchValue;
  }

  getValueChange(){
    return this.valueCurrency;
  }




   // this._dataService.addProduct(formAdminProducts.form.value)
   //     .subscribe(res => this.message = res);

   // this._dataService.uploadFiles(this.files)
   //     .subscribe(res => this.message = res);

   // console.log(formAdminProducts.value);
   // this._dataService.postUploadFiles()
   //     .subscribe(res => res = res);

}

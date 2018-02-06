import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { NgForm } from '@angular/forms';

import { CurrencyPipe } from '@angular/common';

import { Main } from '../main';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  main: any = new Main;
  valueCurrency : string = '0';
  filesToUpload: Array<File> = [];


  constructor(private _dataService: DataService) {

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

  onSubmit(formAdminProducts: NgForm) {
      const files: Array<File> = this.filesToUpload;
      formAdminProducts.value.fileImageProduct = files[0]['name'];
      formAdminProducts.value.type = files[0]['type'];
      // console.log(formAdminProducts.value);
      this._dataService.postUploadFiles()
          .subscribe(res => res = res);
  }

  getFiles(event){
      this.filesToUpload = <Array<File>>event.target.files;
      // this.files = event.target.files;
   }

}

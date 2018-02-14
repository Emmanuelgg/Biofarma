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
  files: FileList;
  response: any;


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


  onSubmit(form: NgForm, collectionName:string, method:string) {

    if (form.valid) {

        if( this.files != null ){
          form.value.fileImageProduct = this.files[0].name;
          form.value.type = this.files[0].type;
        }
        this._dataService.addToTable(method, form.form.value, collectionName)
            .subscribe(res => this.response = res);
            console.log(this.response);
            form.reset();

          // this._dataService.addProduct(formAdminProducts.form.value)
          //     .subscribe(res => this.message = res);

          // this._dataService.uploadFiles(this.files)
          //     .subscribe(res => this.message = res);

          // console.log(formAdminProducts.value);
          // this._dataService.postUploadFiles()
        //     .subscribe(res => res = res);

    } else {
        console.log("error");
    }

  }

  getFiles(event){
      // this.filesToUpload = <Array<File>>event.target.files;
      this.files = event.target.files;
   }

}

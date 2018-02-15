import { NgForm } from '@angular/forms';

import {Component, OnInit, Input} from '@angular/core';

import { DataService } from './data.service';

import {Main} from "./main";

declare var Materialize: any;

export class Methods {

  constructor(private _dataService: DataService) {

  }

  main: any = new Main;
  files: FileList;
  urlFile: String = this.main.pathImages+'imagePreview.png';

  //start submitForm
  onSubmit(form: NgForm, collectionName:string, method:string, files:FileList, message: string ) {

    if (form.valid) {

        if( files != null && files.length > 0){
            form.value.urlFile = files[0].name;
            form.value.type = files[0].type;
            form.value.filePathImages = "assets/resources/images/";
            this.uploadFiles('upload',files, form.value.filePath);
        }

        this._dataService.addToTable(method, form.form.value, collectionName)
            .subscribe(res => {
                var response = res.response;
                if (response.status == 1 && response.ok == true) {
                    this.resetForm(form);
                    Materialize.toast(response.message.success+' '+message, 5000, this.main.toastSuccessColor);
                } else {
                    Materialize.toast(response.message.error, 5000, this.main.toastDangerColor);
                }
            });

    } else {
        Materialize.toast('Error en el formulario verifica los campos', 5000, this.main.toastDangerColor);
    }

  }
  //finish submitForm

  //start resetForm
  resetForm(form: any) {
      this.urlFile = this.main.pathImages+'imagePreview.png';
      form.reset();
  }
  //finish resetForm

  //start get files to input[type="file"]
  getFiles(event:any) {
      // this.filesToUpload = <Array<File>>event.target.files;

        if (event.target.files && event.target.files[0]) {
          this.files = event.target.files;
            var reader = new FileReader();

            reader.onload = (event:any) => {
              this.urlFile = event.target.result;
            }

          reader.readAsDataURL(event.target.files[0]);
        }

   }
   //finish get files to input[type="file"]

   //start uploadFiles
   uploadFiles(method: String,files: FileList, pathFile: String) {

      const formData: any = new FormData();
      formData.append("files", files[0], files[0]['name']);
       this._dataService.uploadFiles(method, formData, pathFile)
            .subscribe(res => {
               var response = res.response;
               if (response.status == 1 && response.ok == true) {
                   Materialize.toast(response.message.success, 5000, this.main.toastSuccessColor);
               } else {
                   Materialize.toast(response.message.error, 5000, this.main.toastDangerColor);
               }
           });
   }
   //finish uploadFiles


}

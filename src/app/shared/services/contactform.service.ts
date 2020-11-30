import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {HttpHeaders}  from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable()
export class ContactformService {

  constructor(public formBuilder: FormBuilder,private http: HttpClient) { }
  url: String = environment.apiurl;
  contactForm: FormGroup;
  formSubmitted: boolean = false;


  buildForm() {
    this.contactForm = this.formBuilder.group({
      userFirstName: this.formBuilder.control(null, Validators.required),
      userLastName: this.formBuilder.control(null, Validators.required)
    });
  }

  onSubmitForm() {
    console.log(this.contactForm.value);
   // this.http.post('http://localhost:3000/send-mail', this.contactForm.value);
   this.http.post<any>(environment.apiurl+'/sendmail', this.contactForm.value).subscribe(res=>{
     console.log(res);
     
   })
    if(this.formSubmitted = true){
       this.contactForm.reset();
    }
    else{

    }
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from '../../../../app/services/apiservices.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mobnumber: any;
  createform: boolean = true;
  otpformif: boolean = false;
  commonform: FormGroup;
usrmobilenumber:any;
  otpform: FormGroup;
  localvalue: string;
  decoded: any;
  constructor(private formBuilder: FormBuilder,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
 this.localvalue = localStorage.getItem('loginresponse')
      if (this.localvalue == null || this.localvalue == '') {
  this.localvalue = localStorage.getItem('loginresponse')
      this.decoded = jwt_decode(this.localvalue);
      this.formbuildergrp();
      this.otpformgrp();
      }
    else{
     this.router.navigate(['/user/profile'])
    }

 
  }
  otpformgrp(): void {
    this.otpform = this.formBuilder.group({
      otpinput: ['', [Validators.required]],
      mobileno: this.mobnumber

    });
  }
  formbuildergrp() {
    this.commonform = this.formBuilder.group({
      customername: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      password: ['', [Validators.required]],
      conpassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.commonform.value.password == this.commonform.value.conpassword) {
      this.apiservice.register(this.commonform.value).subscribe((res) => {

        if (res.status == "1") {
          this.mobnumber = res.mobileno
          this.createform = false;
          this.otpformif = true;
          this.toastrService.success(res.message);
        }
        else {
          this.toastrService.error(res.message);
        }


      })
    }
    else {
      this.toastrService.error("Password Not Matched...");
    }

  }
  onotpSubmit() {
    var senddata = {
      "mobileno": this.usrmobilenumber,
      "otp": this.otpform.value.otpinput
    }
    this.apiservice.otpverify(senddata).subscribe((res) => {

      if (res.status == "1") {
        this.toastrService.success(res.message);
        this.otpformif = false;
        this.createform = true;
        this.usrmobilenumber='';
        this.formbuildergrp();
        this.otpformgrp();
        this.router.navigate(['/home1']);
      } else {
        this.toastrService.error(res.message);

      }
    })
  }

}

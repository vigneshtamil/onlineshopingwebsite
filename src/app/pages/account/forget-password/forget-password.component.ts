import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  commonform: FormGroup;
  decoded: any;
  localvalue: string;
  constructor(private formBuilder: FormBuilder,
    private apiservice:ApiservicesService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    // this.localvalue = localStorage.getItem('loginresponse')
    // this.decoded = jwt_decode(this.localvalue);

    // if( this.localvalue == null || this.localvalue == '')
    // {
    //   this.router.navigate(['/home1'])

    // }
    // else{
    //   this.decoded = jwt_decode(this.localvalue);

    //   this.formbuildergrp();
    // }

 this.localvalue = localStorage.getItem('loginresponse')
      if (this.localvalue == null || this.localvalue == '') {
           alert("Please login...")
        this.router.navigate(['/user/login'])
      }
    else{
      this.localvalue = localStorage.getItem('loginresponse')
      this.decoded = jwt_decode(this.localvalue);
      this.formbuildergrp();
    }
  }

  formbuildergrp()
  {
    this.commonform = this.formBuilder.group({
      mobileno: this.decoded.mobileno,
      oldpassword: ['', [Validators.required]],
      newpassword: ['', [Validators.required]],
      conpassword: ['', [Validators.required]]
    });
  }
  onSubmit()
  {

    if(this.commonform .value.newpassword == this.commonform .value.conpassword)
    {
      this.apiservice.forgetpassword(this.commonform .value).subscribe((res)=>{
        if(res.status == "1")
        {
          this.toastrService.success(res.message);
        }
        else{
          this.toastrService.error(res.message);
         }
      })
    }
    else{
      this.toastrService.error("password does not match...");
    }

  }

  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ApiservicesService} from'../../../../app/services/apiservices.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mobnumber:any;
  createform:boolean = true;
  otpformif:boolean = false;
  commonform: FormGroup;

  otpform:FormGroup;
  constructor(  private formBuilder: FormBuilder,
    private apiservice:ApiservicesService,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
this.formbuildergrp();
this .otpformgrp();
  }
  otpformgrp(): void {
    this.otpform = this.formBuilder.group({
      otpinput: ['', [Validators.required]],
      mobileno:this.mobnumber

    });
  }
  formbuildergrp()
  {
    this.commonform = this.formBuilder.group({
      customername: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      password: ['', [Validators.required]],
      conpassword: ['', [Validators.required]],
    });
  }

  onSubmit()
  {
    if(this.commonform.value.password == this.commonform.value.conpassword )
    {
      this.apiservice.register(this.commonform.value).subscribe((res)=>{

        if(res.status=="1")
        {
          this.mobnumber=res.mobileno
          this.createform = false;
          this.otpformif = true;
          this.toastrService.success(res.message);
        }
        else
        {
          this.toastrService.error(res.message);
        }


      })
    }
    else
    {
      this.toastrService.error("Password Not Matched...");
    }

  }
  onotpSubmit()
  {
    var senddata={
      "mobileno":   this.mobnumber,
      "otp":this.otpform.value.otpinput
    }
    this.apiservice.otpverify(senddata).subscribe((res)=>{

      if (res.status == "1") {
        this.toastrService.success(res.message);
      } else {
        this.toastrService.error(res.message);
      }
    })
  }

}

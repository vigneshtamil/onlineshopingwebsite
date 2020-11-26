import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  commonform: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private apiservice:ApiservicesService) { }

  ngOnInit(): void {
    this.formbuildergrp();
  }

  formbuildergrp()
  {
    this.commonform = this.formBuilder.group({
      mobileno: ['', [Validators.required]],
      oldpassword: ['', [Validators.required]],
      newpassword: ['', [Validators.required]]
    });
  }
  onSubmit()
  {
this.apiservice.forgetpassword(this.commonform .value).subscribe((res)=>{
  console.log(res);

  if(res.status == "1")
  {
alert(res.message);
  }
  else{
    alert(res.message);
   }

})
  }
}

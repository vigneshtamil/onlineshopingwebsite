import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ApiservicesService} from'../../../../app/services/apiservices.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  commonform: FormGroup;

  constructor(  private formBuilder: FormBuilder,
    private apiservice:ApiservicesService) { }

  ngOnInit(): void {
this.formbuildergrp()
  }
  formbuildergrp()
  {
    this.commonform = this.formBuilder.group({
      customername: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit()
  {
this.apiservice.register(this.commonform.value).subscribe((res)=>{
  console.log(res);

})
  }
}

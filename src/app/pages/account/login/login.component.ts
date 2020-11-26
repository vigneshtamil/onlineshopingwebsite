import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  commonform: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.formbuildergrp();
  }
  formbuildergrp() {
    this.commonform = this.formBuilder.group({
      mobileno: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.apiservice.login(this.commonform.value).subscribe((res) => {
      console.log(res)
      if (res.status == "1") {
        this.toastrService.success(res.message);
        this.formbuildergrp();
      } else {
        this.toastrService.error(res.message);
      }
    })
  }
}

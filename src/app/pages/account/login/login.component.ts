import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  commonform: FormGroup;
  localvalue: string;

  constructor(private formBuilder: FormBuilder,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("loginresponse");
    this.router.navigate(['/user/login'])
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

      if (res.status == "1") {
        this.toastrService.success(res.message);
        this.formbuildergrp();

        localStorage.setItem('loginresponse', res.token);
      //  this.apiservice.callMethodOfSecondComponent();
       // alert(res.token)
       this.router.navigate(['/home1']);
      //  window.location.reload();
        this.router.navigate(['/home1']);
      } else {
        this.toastrService.error(res.message);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  commonform: FormGroup;
  addressform:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.formbuildergrp();
    this.addressformgroup()

  }
  formbuildergrp() {
    this.commonform = this.formBuilder.group({
      usrname: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

addressformgroup(){
  this.addressform = this.formBuilder.group({
    addressname: ['', [Validators.required]],
    contactnumber: ['', [Validators.required]],
    addresslineone: ['', [Validators.required]],
    addresslinetwo: ['', [Validators.required]],

    landmark: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    county: ['', [Validators.required]],
    pincode: ['', [Validators.required]]
  });
}

  onSubmit() {
    var senddata = [
      {
        "gender": this.commonform.value.gender,
        "mobileno": this.commonform.value.mobileno,
        "email": this.commonform.value.email,
        "imagepath": "image",
        "usrname": this.commonform.value.usrname,
      }

    ]
    this.apiservice.profileupdate(senddata).subscribe((res) => {
      console.log(res)
      if (res.status == 1) {
        this.toastrService.success(res.message);
        this.formbuildergrp();
      } else {
        this.toastrService.error(res.message);
      }
    })
  }
  onAddressSubmit()
  {

  }
}

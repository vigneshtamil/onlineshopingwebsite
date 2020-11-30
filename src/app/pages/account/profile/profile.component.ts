import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  localvalue:any;
  commonform: FormGroup;
  addressform:FormGroup;
  decoded:any;
  usrdetails: any;
  constructor(
    private formBuilder: FormBuilder,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
   // alert()
   this.localvalue = localStorage.getItem('loginresponse')
    if( this.localvalue == null || this.localvalue == '')
    {
      if (this.localvalue == null || this.localvalue == '') {
        this.router.navigate(['/home1'])
      }

    }
    else{
      this.localvalue = localStorage.getItem('loginresponse')
      this.decoded = jwt_decode(this.localvalue);
      this.formbuildergrp();
      this.addressformgroup();
      this.userdetails()
    }

  }
userdetails(){
console.log(this.decoded);
var senddata = {
  "mobileno":this.decoded.mobileno
}
this.apiservice.userprofiledetails(senddata).subscribe((res)=>{



console.log(this.usrdetails);
this.commonform.patchValue({
  usrname: res[0].customername,
  mobileno:res[0].mobileno,
  email:res[0].email,
  gender:res[0].gender,
})
})

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
    pincode: ['', [Validators.required]],
    mobileno: this.decoded.mobileno,
  });
}

  onSubmit() {
if(this.commonform.invalid)
{
  this.toastrService.error("Plese fill form...");
return false;
}

    var senddata = [
      {
        "gender": this.commonform.value.gender,
        "mobileno": this.decoded.mobileno,
        "email": this.commonform.value.email,
        "imagepath": "image",
        "usrname": this.commonform.value.usrname,
      }

    ]

    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      if (result.value) {

        this.apiservice.profileupdate(senddata).subscribe((res) => {

          if (res.status == 1) {
            this.toastrService.success(res.message);
            this.formbuildergrp();
            this.ngOnInit()
            Swal.fire(
              'Saved!',
              'Your imaginary file has been saved.',
              'success'
            )
          } else {
            this.toastrService.error(res.message);
          }
        })

      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }
  onAddressSubmit()
  {
this.apiservice.addressupdate(this.addressform.value).subscribe((res)=>{

  if (res.status == 1) {
    this.toastrService.success(res.message);
    this.addressformgroup();
  } else {
    this.toastrService.error(res.message);
  }
})
  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }

















}

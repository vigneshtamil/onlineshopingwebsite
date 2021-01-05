import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss']
})
export class AddressbookComponent implements OnInit {
  txtcity:string="salem";
  txtstate:string="Tamilnadu";
  txtcountry:string="India";
  addressform: FormGroup;
  localvalue: string;
  decoded: any;
  usraddresssetailsedit: any;
  constructor(private formBuilder: FormBuilder,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(res => {
      if (Object.keys(res).length === 0) {

      }
      else {
        console.log(res)
this.usraddresssetailsedit=res

      }
    })



    // this.localvalue = localStorage.getItem('loginresponse')
    // if (this.localvalue == null || this.localvalue == '') {
    //   if (this.localvalue == null || this.localvalue == '') {
    //    // alert("Please login...")
    //    this.router.navigate(['/home1'])
    //   }

    // }
    // else {
    //   this.localvalue = localStorage.getItem('loginresponse')
    //   this.decoded = jwt_decode(this.localvalue);
    //   this.addressformgroup()
    // }
      this.localvalue = localStorage.getItem('loginresponse')
    if( this.localvalue == null || this.localvalue == '')
    {
      if (this.localvalue == null || this.localvalue == '') {
           alert("Please login...")
        this.router.navigate(['/user/login'])
      }
    }
    else{
      this.localvalue = localStorage.getItem('loginresponse')
      this.decoded = jwt_decode(this.localvalue);
      this.addressformgroup();
    }
this.editvalueassign()
  }


  editvalueassign(): void {
this.addressform.patchValue({
  _id: this.usraddresssetailsedit._id,
  addressname:this.usraddresssetailsedit.addressname,
  contactnumber:this.usraddresssetailsedit.contactnumber,
  addresslineone:this.usraddresssetailsedit.addresslineone,
  addresslinetwo:this.usraddresssetailsedit.addresslinetwo,
  landmark:this.usraddresssetailsedit.landmark,
  city:this.usraddresssetailsedit.city,
  state:this.usraddresssetailsedit.state,
  county:this.usraddresssetailsedit.county,
  pincode:this.usraddresssetailsedit.pincode,
})
  }
  addressformgroup() {
    this.addressform = this.formBuilder.group({
      _id: null,
      addressname: ['', [Validators.required]],
      contactnumber: ['', [Validators.required]],
      addresslineone: ['', [Validators.required]],
      addresslinetwo: [''],
      landmark: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      county: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      mobileno: this.decoded.mobileno,
    });
  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
  onAddressSubmit() {
    if(this.addressform.invalid)
      {
        this.toastrService.error("please fill address form...");
return false;
      }
    Swal.fire({
      title: 'Are you sure want to save?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      if (result.value) {
        var senddate;
        if(this.addressform.value._id == null)
        {
           senddate={
          "mobileno":this.decoded.mobileno,
          "addressname":this.addressform.value.addressname,
          "addresstype":this.addressform.value.addresstype,
          "contactnumber":this.addressform.value.contactnumber,
          "addresslineone":this.addressform.value.addresslineone,
          "addresslinetwo":this.addressform.value.addresslinetwo,
          "landmark":this.addressform.value.landmark,
          "city":this.addressform.value.city,
          "state":this.addressform.value.state,
          "county":this.addressform.value.county,
          "pincode":this.addressform.value.pincode,
          "lat":"10.2025.125",
          "lon":"123.365.214",
           }
        }
        else{
           senddate={
            "_id":this.addressform.value._id,
          "mobileno":this.decoded.mobileno,
          "addressname":this.addressform.value.addressname,
          "addresstype":this.addressform.value.addresstype,
          "contactnumber":this.addressform.value.contactnumber,
          "addresslineone":this.addressform.value.addresslineone,
          "addresslinetwo":this.addressform.value.addresslinetwo,
          "landmark":this.addressform.value.landmark,
          "city":this.addressform.value.city,
          "state":this.addressform.value.state,
          "county":this.addressform.value.county,
          "pincode":this.addressform.value.pincode,
          "lat":"10.2025.125",
          "lon":"123.365.214",
           }
        }


        this.apiservice.addressupdate(senddate).subscribe((res) => {

          if (res.status == "1") {
            this.toastrService.success(res.message);
            this.addressformgroup();
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


}

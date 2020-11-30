import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.component.html',
  styleUrls: ['./addresslist.component.scss']
})
export class AddresslistComponent implements OnInit {
  addressdetails = [];
  localvalue: string;
  nologin: boolean;
  decoded: any;

  constructor(private formBuilder: FormBuilder,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService,
    private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.localvalue = localStorage.getItem('loginresponse')
    if (this.localvalue == null || this.localvalue == '') {
      if (this.localvalue == null || this.localvalue == '') {
        alert("Please login...")
      }

    }
    else {
      this.localvalue = localStorage.getItem('loginresponse')
      this.decoded = jwt_decode(this.localvalue);
      this.addressload()
    }
  }
  addressload() {

    this.localvalue = localStorage.getItem('loginresponse')


    if( this.localvalue == null || this.localvalue == '')
    {
      this.router.navigate(['/home1'])
    this.nologin=true;
    }
    else{
      this.decoded = jwt_decode(this.localvalue);

      this.nologin=false;
      var senddata = {
        "mobileno": this.decoded.mobileno
      }
      this.apiservice.useraddresslist(senddata).subscribe((res) => {

        this.addressdetails = res.useraddresslist

      })
    }

  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
  addressedit(item: any) {
    this.router.navigate(['/user/addressbook/'],{ queryParams: item })

  }
  addressremove(id: any) {

    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      if (result.value) {

        var senddata = {
          "mobileno": this.decoded.mobileno,
          "_id": id
        }
        this.apiservice.addressremove(senddata).subscribe((res) => {
          if (res.status == "1") {
            this.toastrService.success(res.message);
            Swal.fire(
              'Saved!',
              'Your imaginary file has been saved.',
              'success'
            )
            this.ngOnInit()
          }
          else {
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

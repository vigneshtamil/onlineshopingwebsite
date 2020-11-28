import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import jwt_decode from "jwt-decode";
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
    this.addressload()
  }
  addressload() {

    this.localvalue = localStorage.getItem('loginresponse')


    if( this.localvalue == null || this.localvalue == '')
    {
    this.nologin=true;
    }
    else{
      this.decoded = jwt_decode(this.localvalue);
      console.log('this.localvalue');
      console.log(this.localvalue);
      this.nologin=false;
      var senddata = {
        "mobileno": this.decoded.mobileno
      }
      this.apiservice.useraddresslist(senddata).subscribe((res) => {

        this.addressdetails = res.useraddresslist
        console.log(this.addressdetails)
      })
    }

  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
  addressedit(item: any) {
    this.router.navigate(['/user/addressbook/'],{ queryParams: item,  skipLocationChange: true })

  }
  addressremove(id: any) {
    var senddata = {
      "mobileno": "8925091019",
      "_id": id
    }
    this.apiservice.addressremove(senddata).subscribe((res) => {
      if (res.status == "1") {
        this.toastrService.success(res.message);
      }
      else {
        this.toastrService.error(res.message);
      }
    })

  }
}

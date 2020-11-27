import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.scss']
})
export class AddressbookComponent implements OnInit {

  addressform: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      console.log(res);
      if (Object.keys(res).length === 0) {

      }
      else {
        console.log(res.addresslineone);

        this.addressform.setValue({
          // _id: res._id,
          // addressname: res.addressname,
          // contactnumber: res.contactnumber,
          addresslineone: "res.addresslineone",
          // addresslinetwo: res.addresslinetwo,
          // landmark: res.landmark,
          // city: res.city,
          // state: res.state,
          // county: res.county,
          // pincode: res.pincode,
          // mobileno: "8925091019",
        });
      }
    })


    this.addressformgroup()
  }

  addressformgroup() {
    this.addressform = this.formBuilder.group({
      _id: null,
      addressname: ['', [Validators.required]],
      contactnumber: ['', [Validators.required]],
      addresslineone: ['', [Validators.required]],
      addresslinetwo: ['', [Validators.required]],
      landmark: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      county: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      mobileno: "8925091019",
    });
  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
  onAddressSubmit() {
    this.apiservice.addressupdate(this.addressform.value).subscribe((res) => {
      console.log(res)
      if (res.status == 1) {
        this.toastrService.success(res.message);
        this.addressformgroup();
      } else {
        this.toastrService.error(res.message);
      }
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../../ourpages/shared/product.service';
@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.scss']
})
export class OrderdetailComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
public orderdetails:[]
  toastr: any;
  submitted = false;
  productorderid: any;
  constructor(private route: ActivatedRoute, private router: Router,public ProductService:ProductService,    private modalService: NgbModal,
    private formBuilder: FormBuilder, private httpClient: HttpClient) { }
  orderid:string;
  orderfinalid:string;
  fileToUpload: File = null;
  orderdate:string;
  totalamount:string;
  customername:string;
  addressname:string;
  addresslineone:string;
  landmark:string;
  city:string;
  state:string;
  mobileno:string;
  productlist:[];
  uploadForm: FormGroup;
  modelpopupproduct:any;
  selectedValue: number = 0;
  orderarr:[];
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description:[''],
      // ordernumber:['']
    });
    this.route.queryParams.subscribe(params => {
      var data={
        _id: params.orderid
      }
      this.ProductService.orderdetails(data).subscribe(res=>{
       this.orderfinalid=res._id
        console.log(res);
        if(res['status']=="1"){
          this.orderdetails=res
          this.orderid=res.orderid;
          this.orderdate=res.orderdate;
          this.productlist=res.productlist;
          this.totalamount=res.totalamount;
          this.customername=res.customername;
          this.addressname=res.addressname;
          this.addresslineone=res.addresslineone;
          this.landmark=res.landmark;
          this.city=res.city;
          this.state=res.state;
          this.mobileno=res.mobileno;
        }else{
        }
      })
    });
  }
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  addClass(star) {
    let ab = "";
    for (let i = 0; i < star; i++) {
      ab = "starId" + i;
      document.getElementById(ab).classList.add("selected");
    }
 }
 removeClass(star) {
    let ab = "";
    for (let i = star-1; i >= this.selectedValue; i--) {
      ab = "starId" + i;
      document.getElementById(ab).classList.remove("selected");
    }
 }
  public openDashboard: boolean = false;
  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
  openModal(content: any,Productdetails:any) {
    this.modelpopupproduct="";
    this.modelpopupproduct=Productdetails;
    this.productorderid=Productdetails._id;
    console.log(Productdetails);
    this.modalService.open(content, { size: 'xl', windowClass: 'modal-holder', backdrop: 'static', keyboard: false });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  fileChangeEvent(event: any): void {
    this.fileToUpload = event.target.files[0];
     console.log(this.fileToUpload);
   }
   get formData() {
    return this.uploadForm.controls;
  }
  formsubmit() {
    var date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let finaldate = (year + '-' + month + '-' + day + '-' + hours + '-' + minutes + '-' + seconds)
    this.submitted = true;
    var sendata={
      "orderid":this.orderfinalid,
      "_id": this.productorderid,
      "title":this.uploadForm.value.title,
      "description":this.uploadForm.value.description,
      "starrte": this.selectedValue
    }
  
    this.ProductService.reviewadd(sendata).subscribe(res => {
      if (res['status'] =="success") {
        this.modalService.dismissAll()
        this.uploadForm.reset();
        alert("Review added successfully")
        this.ngOnInit();
       }
       else {
        alert("Review Not added successfully")
      }
    })
  }
}

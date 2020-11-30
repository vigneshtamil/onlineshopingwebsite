import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from '../../../shared/data/slider';
import { ProductService } from '../../shared/product.service';
import { ProductSlider } from '../../../shared/data/slider';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-productfullview',
  templateUrl: './productfullview.component.html',
  styleUrls: ['./productfullview.component.scss']
})
export class ProductfullviewComponent implements OnInit {
  public product = {};
  public products: any[] = [];
  public counter: number = 1;
  public activeSlide: any = 0;
  public selectedSize: any;
  public ProductSliderConfig: any = ProductSlider;
  description: string = 'Use the sample job postings below to help write your job description and improve your job posting results. Then when youre ready, post your job on Monster to reach the right talent – act now and save 20% when you buy a 60-day job ad!'
  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;
  productname: string;
  desc: string;
  attributes: string;
  stock: number;
  minusamount: string;
  offer: string;
  amount: string;
  images: any[]
  localvalue: string;
  nologin: boolean;
  decoded: any;
  productids: any;

  // =[
  //   {src:'assets/images/product/placeholder.jpg',alt:'name'},
  //   {src:'assets/images/product/placeholder.jpg',alt:'name'},
  //   {src:'assets/images/product/placeholder.jpg',alt:'name'},
  //  ]
  constructor(private toastrService: ToastrService, private route: ActivatedRoute, private router: Router, public ProductService: ProductService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      this.bindproduct(params)
      this.productids=params
    });
    this.localvalue = localStorage.getItem('loginresponse')


    if (this.localvalue == null || this.localvalue == '') {

      this.nologin = true;
    }
    else {
      this.decoded = jwt_decode(this.localvalue);

      this.nologin = false;

    }
  }
  async bindproduct(filedata) {
    await this.ProductService.getfullproductview(filedata).subscribe(res => {


      this.productname = res['result'][0].displayname;
      this.desc = res['result'][0].description;
      this.attributes = res['result'][0].attributes;
      this.stock = res['result'][0].availableqty;
      this.minusamount = (res['result'][0].mrpprice - res['result'][0].sellingprice).toString();
      this.offer = '0';
      this.amount = res['result'][0].sellingprice;
      this.images = [
        { src: this.ProductService.apiurl + res['result'][0].img1, alt: 'name' },
        { src: this.ProductService.apiurl + res['result'][0].img2, alt: 'name' },
        { src: this.ProductService.apiurl + res['result'][0].img3, alt: 'name' },
      ]

      this.products = res['relatedproductlist']

    })
  }
  increment() {
    this.counter++;
  }

  // Decrement
  decrement() {
    if (this.counter > 1) this.counter--;
  }
  addtocart(products) {

    if (this.localvalue == null || this.localvalue == '') {

      alert("Please login...")
      return false;
    }

    var senddata = {
      "customer": this.decoded._id,
      "productdetails": [
        {
          "productid":  this.productids.productid,
          "productinwardid":  this.productids.productinwardid,
          "qty": this.counter
        }
      ]
    }
    this.ProductService.addtocartservice(senddata).subscribe((res) => {

      if (res.status == "1") {
        this.toastrService.success(res.message);
        window.location.reload();
      }
      else {
        this.toastrService.error(res.message);
      }
    })
  }
  wishlist(products) {
    if (this.localvalue == null || this.localvalue == '') {

      alert("Please login...")
      return false;
    }
    var senddata = {
      "customer": this.decoded._id,
      "productdetails": [
        {
          "productid":  this.productids.productid,
          "productinwardid":  this.productids.productinwardid,
          "qty": 1
        }
      ]
    }
    this.ProductService.addtowishservice(senddata).subscribe((res) => {

      if (res.status == "1") {
        this.toastrService.success(res.message);
        window.location.reload();
      }
      else {
        this.toastrService.error(res.message);
      }
    })
  }

}

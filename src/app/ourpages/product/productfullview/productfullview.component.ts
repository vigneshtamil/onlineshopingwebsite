import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from '../../../shared/data/slider';
import {ProductService} from '../../shared/product.service';
import { ProductSlider } from '../../../shared/data/slider';
@Component({
  selector: 'app-productfullview',
  templateUrl: './productfullview.component.html',
  styleUrls: ['./productfullview.component.scss']
})
export class ProductfullviewComponent implements OnInit {
  public product = {};
  public products :any[]=[];
  public counter: number = 1;
  public activeSlide: any = 0;
  public selectedSize: any;
  public ProductSliderConfig: any = ProductSlider;
   description:string='Use the sample job postings below to help write your job description and improve your job posting results. Then when youre ready, post your job on Monster to reach the right talent – act now and save 20% when you buy a 60-day job ad!'
  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;
  productname:string;
  desc:string;
  attributes:string;
  stock:number;
  minusamount:string;
  offer:string;
  amount:string;
  images:any[]
  productid:any;
  // =[
  //   {src:'assets/images/product/placeholder.jpg',alt:'name'},
  //   {src:'assets/images/product/placeholder.jpg',alt:'name'},
  //   {src:'assets/images/product/placeholder.jpg',alt:'name'},
  //  ]
  constructor(private route: ActivatedRoute, private router: Router,public ProductService:ProductService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.bindproduct(params)
    });
  }
 async bindproduct(filedata){
    await this.ProductService.getfullproductview(filedata).subscribe(res=>{
    console.log(res);
    this.productid=res.res['result'][0].productid;
    this.productname=res['result'][0].displayname;
    this.desc=res['result'][0].description;
    this.attributes=res['result'][0].attributes;
    this.stock=res['result'][0].availableqty;
    this.minusamount=(res['result'][0].mrpprice-res['result'][0].sellingprice).toString();
    this.offer='0';
    this.amount=res['result'][0].sellingprice;
    this.images=[
      {src:this.ProductService.apiurl+res['result'][0].img1,alt:'name'},
      {src:this.ProductService.apiurl+res['result'][0].img2,alt:'name'},
      {src:this.ProductService.apiurl+res['result'][0].img3,alt:'name'},
     ]

     this.products=res['relatedproductlist']
     
    })
  }
  increment() {
    this.counter++ ;
  }

  // Decrement
  decrement() {
    if (this.counter > 1) this.counter-- ;
  }
  openreview(_id){
    this.ProductService.reviewid=_id
    this.router.navigate(['home1/review/'],{queryParams:{id:_id}})
  }
}

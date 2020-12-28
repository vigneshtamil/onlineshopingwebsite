import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ProductService} from '../../shared/product.service'
import { AppquickviewComponent } from '../appquickview/appquickview.component';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-productbox-one',
  templateUrl: './productbox-one.component.html',
  styleUrls: ['./productbox-one.component.scss']
})
export class ProductboxOneComponent implements OnInit {
  @Input() product;
  @Input() currency: any; // Default Currency
  @Input() thumbnail: boolean = false; // Default False
  @Input() onHowerChangeImage: boolean = false; // Default False
  @Input() cartModal: boolean = false; // Default False
  @Input() loader: boolean = false;
  @ViewChild("quickView") QuickView: AppquickviewComponent;
  public ImageSrc : string;
  localvalue: string;
  nologin: boolean;
  decoded: any;
  constructor(public ProductService: ProductService, private route: ActivatedRoute, private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    if(this.loader) {
      setTimeout(() => { this.loader = false; }, 2000); // Skeleton Loader
    }
    this.localvalue = localStorage.getItem('loginresponse')


    if( this.localvalue == null || this.localvalue == '')
    {
    this.nologin=true;
    }
    else{
      this.decoded = jwt_decode(this.localvalue);

      this.nologin=false;

    }
  }
  openfullview(productid,id){
    this.router.navigate(['/home1/productfullview'],{queryParams:{productid:productid,productinwardid:id}})
  }
   // Change Variants
   ChangeVariants(color, product) {
    product.variants.map((item) => {
      if (item.color === color) {
        product.images.map((img) => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        })
      }
    })
  }
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
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
          "productid": products.productid,
          "productinwardid": products.productinwardid,
          "productinwarddetailsid":products._id,
          "qty": 1
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
          "productid": products.productid,
          "productinwardid": products.productinwardid,
          "productinwarddetailsid":products._id,
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

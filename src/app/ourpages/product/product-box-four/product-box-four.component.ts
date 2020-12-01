import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../shared/product.service'
import { AppquickviewComponent } from '../appquickview/appquickview.component';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-productbox-four',
  templateUrl: './product-box-four.component.html',
  styleUrls: ['./product-box-four.component.scss']
})
export class ProductBoxFourComponent implements OnInit {
  @Input() products;
  @Input() currency: any  // Default Currency
  @Input() onHowerChangeImage: boolean = false; // Default False
  @Input() cartModal: boolean = false;

  @ViewChild("quickView") QuickView: AppquickviewComponent;
  localvalue: string;
  nologin: boolean;
  decoded: any;
  constructor(public ProductService: ProductService, private route: ActivatedRoute, private router: Router,
    private toastrService: ToastrService) { }
  public ImageSrc: string
  ngOnInit(): void {
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
  openfullview(productid, id) {
    this.router.navigate(['/home1/productfullview'], { queryParams: { productid: productid, productinwardid: id } })
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
          "productinwardid": products._id,
          "productinwarddetailsid":products.productinwarddetailsid,
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
      "customer":  this.decoded._id,
      "productdetails": [
        {
          "productid": products.productid,
          "productinwardid": products._id,
          "productinwarddetailsid":products.productinwarddetailsid,
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

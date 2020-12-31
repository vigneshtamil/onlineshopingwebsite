import { Component, OnInit, Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../classes/product";
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  afterlogin:boolean=true;
  decoded: any;
  cartlistcount: any = 0
  cartshow: boolean = false;
  cartproductlist: any;
  localvalue: string;
  profileshow: boolean = false;
  public products: Product[] = [];
  public search: boolean = false;
  public cartli: boolean = false;
  public wishlistli: boolean = false;

  public languages = [{
    name: 'Login',
    code: 'en'
  }, {
    name: 'Logout',
    code: 'fr'
  }];

  public currencies = [{
    name: 'Euro',
    currency: 'EUR',
    price: 0.90 // price of euro
  }, {
    name: 'Rupees',
    currency: 'INR',
    price: 70.93 // price of inr
  }, {
    name: 'Pound',
    currency: 'GBP',
    price: 0.78 // price of euro
  }, {
    name: 'Dollar',
    currency: 'USD',
    price: 1 // price of usd
  }]
  wishprofileshow: boolean = false
  wishproducts: any;
  totalamount: any;
  totalwishamount: any;
  wishlistcount: any = 0;
  whishlistempty: boolean;
  cartempty: boolean;
  imageurl: ApiservicesService;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,

    private translate: TranslateService,
    private router: Router,
    public productService: ProductService,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService) {

      this.imageurl=this.apiservice
    // this.productService.cartItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {

    this.localvalue = localStorage.getItem('loginresponse')


    if (this.localvalue == null) {
      this.profileshow = false;


    }
    else {
      this.cartli = true;
      this.wishlistli = true;
      this.profileshow = true;
      this.decoded = jwt_decode(this.localvalue);
this.afterlogin=false;

      this.cartlist()
      this.whishlist()

    }

  }
  cartlist() {
    var senddata = { "customer": this.decoded._id }
    this.apiservice.cartlist(senddata).subscribe((res) => {

      if (res.status == "1") {
        this.cartshow = true;
        // this.profileshow = true;
        this.products = res.cartlist
        this.cartlistcount = this.products.length
        this.totalamount = this.products.map(o => o.producttotalrate).reduce((a, c) => { return a + c });
        this.cartempty = false;

      } else {
        this.cartshow = false;
        this.cartempty = true;
      }
    })
  }

  whishlist() {
    var senddata = { "customer": this.decoded._id }
    this.apiservice.wishlistservice(senddata).subscribe((res) => {

      if (res.status == "1") {

        this.wishprofileshow = true;
        this.wishproducts = res.whishlist;
        this.whishlistempty = false;
        this.wishlistcount = this.wishproducts.length;

      } else {
        this.wishprofileshow = false;
        this.whishlistempty = true;
      }
    })
  }
  cartclick() {
    if (this.localvalue == null) {
      alert("please login...")
    }
    else {

      this.router.navigate(['/shop/cart'])
    }
  }
  wishlistclick() {
    if (this.localvalue == null) {
      alert("please login...")
    }
    else {

      this.router.navigate(['/shop/wishlist'])
    }
  }

  searchToggle() {
    this.search = !this.search;
  }

  changeLanguage(code) {
    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(code)
    }
  }

  get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  removecartItem(product: any) {
    // this.productService.removeCartItem(product);
    var senddata = {
      "customer": this.decoded._id,
      "_id": product._id
    }
    this.apiservice.cartdelete(senddata).subscribe((res) => {
      if (res.status == "1") {
        this.toastrService.success(res.message);
        this.cartlist()
        this.whishlist()
      }
      else {
        this.toastrService.error(res.message);
      }
    })

  }



  removewishlistItem(product: any) {
    // this.productService.removeCartItem(product);
    var senddata = {
      "customer": this.decoded._id,
      "_id": product.productinwardiddetails
    }
    this.apiservice.wishlistdelete(senddata).subscribe((res) => {
      if (res.status == "1") {
        this.toastrService.success(res.message);
        this.cartlist()
        this.whishlist()

      }
      else {
        this.toastrService.error(res.message);
      }
    })
  }

  changeCurrency(currency: any) {
    this.productService.Currency = currency
  }
  looutfn() {
    this.cartli = false;
    this.wishlistli = false;
    this.profileshow = false;
    localStorage.removeItem("loginresponse");
    this.router.navigate(['/user/login'])
    window.location.reload();
    this.router.navigate(['/user/login'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../../shared/services/product.service";
import { Product } from "../../shared/classes/product";
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public products: Product[] = [];
  cartshow: boolean;
  profileshow: boolean;
  localvalue: string;
  decoded: any;
  nologin: boolean;

  constructor(private router: Router,
    public productService: ProductService,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService) {
    this.productService.wishlistItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {
    // this.localvalue = localStorage.getItem('loginresponse')
    // this.decoded = jwt_decode(this.localvalue);
    // this.wishlistservice();


    this.localvalue = localStorage.getItem('loginresponse')


    if (this.localvalue == null || this.localvalue == '') {
      this.nologin = true;
    }
    else {
      this.decoded = jwt_decode(this.localvalue);

      this.nologin = false;
      this.wishlistservice()
    }
  }
  wishlistservice() {
    var senddata = { "customer": this.decoded._id }
    this.apiservice.wishlistservice(senddata).subscribe((res) => {

      if (res.status == "1") {
        this.cartshow = false;
        this.profileshow = true;
        this.products = res.whishlist

      } else {
        this.cartshow = true;
        this.profileshow = false;
      }
    })
  }







  async addToCart(product: any) {
    // const status = await this.productService.addToCart(product);
    // if (status) {
    //   this.router.navigate(['/shop/cart']);
    //   this.removeItem(product);
    // }

    var senddata = {
      "customer": this.decoded._id,
      "productdetails": [
        {
          "productid": product.productid,
          "productinwardid": product.productinwardid,
        }
      ]
    }
    this.apiservice.addtocartservice(senddata).subscribe((res) => {

      if (res.status == "1") {
        this.toastrService.success(res.message);
        window.location.reload();
      }
      else {
        this.toastrService.error(res.message);
      }
    })








  }

  removeItem(product: any) {

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
          "customer": this.decoded._id,
          "_id": product._id
        }
        this.apiservice.wishlistdelete(senddata).subscribe((res) => {
          if (res.status == "1") {
            this.toastrService.success(res.message);
            this.wishlistservice()
            Swal.fire(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            )
          }
          else {
            this.toastrService.error(res.message);
          }
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }






}

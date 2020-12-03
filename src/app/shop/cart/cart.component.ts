import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from "../../shared/services/product.service";
import { Product } from "../../shared/classes/product";
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  nologin:boolean = false;
totalamount:number;
  public products: Product[] = [];
  cartshow: boolean;
  profileshow: boolean=false;
  wishprofileshow: boolean;
  wishproducts: any;
  localvalue: string;
  decoded: any;

  constructor(
    public productService: ProductService,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService

    ) {

  //  this.productService.cartItems.subscribe(response => this.products = response);
  }
  name(name: any) {
    alert()
  }

  ngOnInit(): void {
    this.localvalue = localStorage.getItem('loginresponse')


    if( this.localvalue == null || this.localvalue == '')
    {
      if (this.localvalue == null || this.localvalue == '') {
        alert("Please login...")
      }
    this.nologin=true;
    }
    else{
      this.decoded = jwt_decode(this.localvalue);

      this.nologin=false;
      this.cartlist()
    }
  }
  invokeMyMethode() {
    throw new Error('Method not implemented.');
  }


  cartlist() {

    //var senddata={"customer":"5fa8ebfd86d0290017ec3b9e"}
    var senddata={"customer":this.decoded._id}
this.apiservice.cartlist(senddata).subscribe((res)=>{

if(res.status == "1")
{
  this.cartshow = false;
  this.profileshow = true;
  this.products=res.cartlist
 this.totalamount = this.products.map(o => o.producttotalrate).reduce((a, c) => { return a + c });


}else{
  this.cartshow = true;
  this.profileshow = false;
}
})
  }


  public get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  // Increament
  increment(product) {

    var senddata={
      "mobileno":this.decoded.mobileno,
      "_id":product._id,
      "qty":product.qty+1
  }
    this.apiservice.cartqtyaddservice(senddata).subscribe((res)=>{
      if(res.status == "1")
{
  this.toastrService.success(res.message);
  this.cartlist()

}
else{
  this.toastrService.error(res.message);
}
    })
  }

  // Decrement
  decrement(product) {
    if(product.qty == 1)
    {
      this.toastrService.error("1 qty need...");
      return false;

    }
    var senddata={
      "mobileno":this.decoded.mobileno,
      "_id":product._id,
      "qty":product.qty-1
  }
    this.apiservice.cartqtyaddservice(senddata).subscribe((res)=>{
      if(res.status == "1")
{
  this.toastrService.success(res.message);
  this.cartlist()

}
else{
  this.toastrService.error(res.message);
}
    })
  }

  public removeItem(product: any) {
Swal.fire({
  title: 'Are you sure want to remove?',
  text: 'You will not be able to recover this file!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'
}).then((result) => {
  if (result.value) {
    var senddata={
      "customer":this.decoded._id,
      "_id":product._id
  }
  this.apiservice.cartdelete(senddata).subscribe((res)=>{
  if(res.status == "1")
  {
    this.toastrService.success(res.message);
    window.location.reload();
    this.cartlist()
    Swal.fire(
      'Deleted!',
      'Your imaginary file has been deleted.',
      'success'
    )

  }
  else{
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

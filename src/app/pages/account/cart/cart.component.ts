import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/ourpages/shared/product.service';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
imageurl:any;
  nologin:boolean = false;
totalamount:number;
  public products;
  cartshow: boolean;
  profileshow: boolean=false;
  wishprofileshow: boolean;
  wishproducts: any;
  localvalue: string;
  decoded: any;

  constructor(
    public productService: ProductService,
    private apiservice: ApiservicesService,
    private toastrService: ToastrService,
    private router: Router

    ) {
      this.imageurl=this.apiservice.commenurl;
   // this.productService.cartItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {

    this.localvalue = localStorage.getItem('loginresponse')


    if( this.localvalue == null || this.localvalue == '')
    {
      this.router.navigate(['/home1'])
    this.nologin=true;
    }
    else{
      this.decoded = jwt_decode(this.localvalue);

      this.nologin=false;
      this.cartlist()
    }
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
  this.cartshow = false;
  this.profileshow = false;
}
})
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
       // this.productService.removeCartItem(product);
   var senddata={
    "customer":this.decoded._id,
    "_id":product._id
}
this.apiservice.cartdelete(senddata).subscribe((res)=>{
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

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from '../../../environments/environment';
import { Product } from "../../shared/classes/product";
import { ProductService } from "../../shared/services/product.service";
import { OrderService } from "../../shared/services/order.service";
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  addressselection:any;

  public checkoutForm:  FormGroup;
  public products: Product[] = [];
  public payPalConfig ? : IPayPalConfig;
  public payment: string = 'Stripe';
  public amount:  any;
  totalamount: any;
  localvalue: string;
  decoded: any;
  nologin: boolean;
  addressdetails: any;

  constructor(private router:ActivatedRoute,
    private route:Router,
    private fb: FormBuilder,
    private apiservice: ApiservicesService,
    public productService: ProductService,
    private orderService: OrderService,
    private toastrService: ToastrService) {
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.localvalue = localStorage.getItem('loginresponse')
    this.decoded = jwt_decode(this.localvalue);
    this.productService.cartItems.subscribe(response => this.products = response);
    this.getTotal.subscribe(amount => this.amount = amount);
    this.initConfig();
    this.cartlist()
    this.localvalue = localStorage.getItem('loginresponse')


    if( this.localvalue == null || this.localvalue == '')
    {
    this.nologin=true;
    }
    else{
      this.decoded = jwt_decode(this.localvalue);

      this.nologin=false;
      var senddata = {
        "mobileno": this.decoded.mobileno
      }
      this.apiservice.useraddresslist(senddata).subscribe((res) => {

        this.addressdetails = res.useraddresslist

      })
    }

  }

  cartlist() {
    var senddata={"customer":this.decoded._id}
this.apiservice.cartlist(senddata).subscribe((res)=>{

if(res.status == "1")
{
  this.products=res.cartlist

 this.totalamount = this.products.map(o => o.producttotalrate).reduce((a, c) => { return a + c });


}else{

}
})
  }
  public get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  // Stripe Payment Gateway
  stripeCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: environment.apiurl, // publishble key
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.orderService.createOrder(this.products, this.checkoutForm.value, token.id, this.amount);
      }
    });
    handler.open({
      name: 'Multikart',
      description: 'Online Fashion Store',
      amount: this.amount * 100
    })
  }

  // Paypal Payment Gateway
  private initConfig(): void {
    this.payPalConfig = {
        currency: this.productService.Currency.currency,
        clientId: environment.apiurl,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                currency_code: this.productService.Currency.currency,
                value: this.amount,
                breakdown: {
                    item_total: {
                        currency_code: this.productService.Currency.currency,
                        value: this.amount
                    }
                }
              }
          }]
      },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            size:  'small', // small | medium | large | responsive
            shape: 'rect', // pill | rect
        },
        onApprove: (data, actions) => {
            this.orderService.createOrder(this.products, this.checkoutForm.value, data.orderID, this.getTotal);
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });
        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };
  }

  placeorder()
  {
    var senddata={

      "customerid":this.decoded._id,
      "deleveryaddressid":this.addressselection,
      "paymenttype":"cash",
      "totalamount":this.totalamount,
      "orderproductdetails":this.products

  }

    this.apiservice.placeorderapi(senddata).subscribe((res)=>{


if(res.status == "1")
{
  this.toastrService.success(res.message);
  this.route.navigate(['/shop/checkout/success'],
  {queryParams: {oid: res.orderdatabaseid}});
}
else{
  this.toastrService.error(res.message);
}
    })
  }

  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../shared/product.service';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
public orderdetails:[]
  constructor(private route: ActivatedRoute, private router: Router,public ProductService:ProductService) { }
  orderid:string;
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

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      var data={
        _id: params.orderid
      }
      this.ProductService.orderdetails(data).subscribe(res=>{
        if(res['status']==1){
          console.log(res);
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
          console.log(res['message']);          
        }
      })
    });
  }

}

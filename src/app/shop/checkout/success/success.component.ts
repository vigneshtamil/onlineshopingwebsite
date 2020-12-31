import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { Order } from '../../../shared/classes/order';
import { OrderService } from '../../../shared/services/order.service';
import { ProductService } from '../../../shared/services/product.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit, AfterViewInit {
  orderDetails: any;
  dborderid: any;
  date: Date;
  imageurl: String;
 // public orderDetails;

  constructor(public route: ActivatedRoute, public productService: ProductService,
    private apiservice: ApiservicesService,
    private orderService: OrderService) {  this.imageurl=this.apiservice.commenurl}

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.dborderid = params['oid'];
      });



    var senddata = {
      "_id": this.dborderid
    }

    this.apiservice.orderdetails(senddata).subscribe((res) => {


      if (res.status == "1") {
        this.orderDetails = res;

        this.date = new Date();
        this.date.setDate( this.date.getDate() + 3 );



      }
      else {

      }

    })
    //this.orderService.checkoutItems.subscribe(response => this.orderDetails = response);
  }

  ngAfterViewInit() {

  }

}

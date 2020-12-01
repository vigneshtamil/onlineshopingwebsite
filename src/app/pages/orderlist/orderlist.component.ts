import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../ourpages/shared/product.service'
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
public orderlist : any[]=[]
  localvalue: string;
  decoded: any;
  constructor(
    public ProductService: ProductService,private route: ActivatedRoute, private router: Router,
  ) { }

  ngOnInit(): void {
    this.localvalue = localStorage.getItem('loginresponse')
    if (this.localvalue == null || this.localvalue == '') {
  alert("Please login")
    }
    else {
      this.decoded = jwt_decode(this.localvalue);
   this.getorderlist()
    }
  }
  getorderlist() {
    var data = {
      customerid:  this.decoded._id
    }
    this.ProductService.orderlist(data).subscribe(res => {
      if(res['status']='1'){
        this.orderlist=res['orderlist']
      }else{
      }
    })
  }
  redirectorderdetails(id) {
    this.router.navigate(['/user/orderdetail'], { queryParams: { orderid: id} })
  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }

}


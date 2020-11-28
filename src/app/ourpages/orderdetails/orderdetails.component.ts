import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../shared/product.service';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
orderdetails:string[]
  constructor(private route: ActivatedRoute, private router: Router,public ProductService:ProductService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      var data={
        _id: '5fc1e00227765b0e5435e6eb'
      }
      this.ProductService.orderdetails(data).subscribe(res=>{
        if(res['status']==1){
          console.log(res);
          this.orderdetails=res
        }else{
          console.log(res['message']);          
        }
      })
    });
  }

}

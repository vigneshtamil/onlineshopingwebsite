import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service'
@Component({
  selector: 'app-overallorderlist',
  templateUrl: './overallorderlist.component.html',
  styleUrls: ['./overallorderlist.component.scss']
})
export class OverallorderlistComponent implements OnInit {
public orderlist : any[]=[]
  constructor(
    public ProductService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getorderlist();
  }
  getorderlist() {
    var data = {
      customerid: '5fa8ebfd86d0290017ec3b9e'
    }
    this.ProductService.orderlist(data).subscribe(res => {
      if(res['status']='1'){
        this.orderlist=res['orderlist']
      }else{
        console.log(res['meaasge']);
        
      }
    })
  }
}

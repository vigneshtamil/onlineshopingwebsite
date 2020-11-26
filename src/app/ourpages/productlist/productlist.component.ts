import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import {ProductService} from '../shared/product.service'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  public grid: string = 'col-xl-3 col-md-6';
  public layoutView: string = 'grid-view';
  public products: any[] = [];
  constructor(public ProductService:ProductService) { 
    alert()
  }

  ngOnInit(): void {
    alert()
    this.searchproduct();
  }
  searchproduct(){
    var filterdata={
      searchtext:this.ProductService.searchproductslist,
      categoryid:'',
      subcategoryid:''
    }
    this.ProductService.searchproducts(filterdata).subscribe(res=>{
      if(res['status']='success'){
        console.log(res);
        this.products=res['result'];
        this.ProductService.productlist=res['result'];

      }else
      
      console.log(res);
    })
  }

}

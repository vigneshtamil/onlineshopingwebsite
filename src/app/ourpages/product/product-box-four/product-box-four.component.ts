import { Component, Input, OnInit } from '@angular/core';
import {ProductService} from '../../shared/product.service'
@Component({
  selector: 'app-productbox-four',
  templateUrl: './product-box-four.component.html',
  styleUrls: ['./product-box-four.component.scss']
})
export class ProductBoxFourComponent implements OnInit {
  @Input() products;
  cartModal: boolean = false
  constructor(public ProductService:ProductService) { }

  ngOnInit(): void {
    console.log(this.products);
    
  }

}

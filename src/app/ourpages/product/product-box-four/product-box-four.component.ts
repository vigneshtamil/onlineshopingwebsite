import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../../shared/product.service'
import { AppquickviewComponent } from '../appquickview/appquickview.component';
@Component({
  selector: 'app-productbox-four',
  templateUrl: './product-box-four.component.html',
  styleUrls: ['./product-box-four.component.scss']
})
export class ProductBoxFourComponent implements OnInit {
  @Input() products;
  @Input() currency: any  // Default Currency 
  @Input() onHowerChangeImage: boolean = false; // Default False
  @Input() cartModal: boolean = false;

  @ViewChild("quickView") QuickView: AppquickviewComponent;
  constructor(public ProductService:ProductService,private route: ActivatedRoute, private router: Router,) { }
  public ImageSrc : string
  ngOnInit(): void {
    
  }
  openfullview(productid,id){
    this.router.navigate(['/home1/productfullview'],{queryParams:{productid:productid,productinwardid:id}})
  }
}

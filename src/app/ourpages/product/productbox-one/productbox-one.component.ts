import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../../shared/product.service'
import { AppquickviewComponent } from '../appquickview/appquickview.component';
@Component({
  selector: 'app-productbox-one',
  templateUrl: './productbox-one.component.html',
  styleUrls: ['./productbox-one.component.scss']
})
export class ProductboxOneComponent implements OnInit {
  @Input() product;
  @Input() currency: any; // Default Currency
  @Input() thumbnail: boolean = false; // Default False
  @Input() onHowerChangeImage: boolean = false; // Default False
  @Input() cartModal: boolean = false; // Default False
  @Input() loader: boolean = false;
  @ViewChild("quickView") QuickView: AppquickviewComponent;
  public ImageSrc : string
  constructor(public ProductService:ProductService,private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    if(this.loader) {
      setTimeout(() => { this.loader = false; }, 2000); // Skeleton Loader
    }
  }
  openfullview(productid,id){
    this.router.navigate(['/home1/productfullview'],{queryParams:{productid:productid,productinwardid:id}})
  }
   // Change Variants
   ChangeVariants(color, product) {
    product.variants.map((item) => {
      if (item.color === color) {
        product.images.map((img) => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        })
      }
    })
  }
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
}

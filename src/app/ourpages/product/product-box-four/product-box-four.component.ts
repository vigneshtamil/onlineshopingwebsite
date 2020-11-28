import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../shared/product.service'
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
  constructor(public ProductService: ProductService, private route: ActivatedRoute, private router: Router,
    private toastrService: ToastrService) { }
  public ImageSrc: string
  ngOnInit(): void {

  }
  openfullview(productid, id) {
    this.router.navigate(['/home1/productfullview'], { queryParams: { productid: productid, productinwardid: id } })
  }
  addtocart(products) {
    var senddata = {
      "customer": "5fa8ebfd86d0290017ec3b9e",
      "productdetails": [
        {
          "productid": products.productid,
          "productinwardid": products._id,
          "qty": 1
        }
      ]
    }
    this.ProductService.addtocartservice(senddata).subscribe((res) => {
      console.log(res);
      if (res.status == "1") {
        this.toastrService.success(res.message);
        window.location.reload();
      }
      else {
        this.toastrService.error(res.message);
      }
    })
  }
  wishlist(products) {
    var senddata = {
      "customer": "5fa8ebfd86d0290017ec3b9e",
      "productdetails": [
        {
          "productid": products.productid,
          "productinwardid": products._id,
          "qty": 1
        }
      ]
    }
    this.ProductService.addtowishservice(senddata).subscribe((res) => {
      console.log(res);
      if (res.status == "1") {
        this.toastrService.success(res.message);
        window.location.reload();
      }
      else {
        this.toastrService.error(res.message);
      }
    })
  }

}

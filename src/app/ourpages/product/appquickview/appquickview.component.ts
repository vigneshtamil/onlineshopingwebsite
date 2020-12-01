import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {ProductService} from '../../shared/product.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-appquickview',
  templateUrl: './appquickview.component.html',
  styleUrls: ['./appquickview.component.scss']
})
export class AppquickviewComponent implements OnInit {
  @Input() product;
  @ViewChild("quickView", { static: false }) QuickView: TemplateRef<any>;
  public closeResult: string;
  public ImageSrc: string;
  public counter: number = 1;
  public modalOpen: boolean = false;
  localvalue: string;
  nologin: boolean;
  decoded: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private router: Router, private modalService: NgbModal,public ProductService:ProductService,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.localvalue = localStorage.getItem('loginresponse')


    if( this.localvalue == null || this.localvalue == '')
    {
    this.nologin=true;
    }
    else{
      this.decoded = jwt_decode(this.localvalue);


      this.nologin=false;

    }
  }
  openModal() {
    this.modalOpen = true;
    if (isPlatformBrowser(this.platformId)) { // For SSR
      this.modalService.open(this.QuickView, {
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'Quickview'
      }).result.then((result) => {
        `Result ${result}`
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // Increament
  increment() {
    this.counter++ ;
  }

  // Decrement
  decrement() {
    if (this.counter > 1) this.counter-- ;
  }
  ngOnDestroy() {
    if(this.modalOpen){
      this.modalService.dismissAll();
    }
  }
  addtocart(products) {
    if (this.localvalue == null || this.localvalue == '') {

      alert("Please login...")
      return false;
    }
    var senddata = {
      "customer":  this.decoded._id,
      "productdetails": [
        {
          "productid": products.productid,
          "productinwardid": products._id,
          "productinwarddetailsid":products.productinwarddetailsid,
          "qty": this.counter
        }
      ]
    }
    this.ProductService.addtocartservice(senddata).subscribe((res) => {

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

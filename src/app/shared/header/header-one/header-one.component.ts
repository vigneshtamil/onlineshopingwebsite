import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../../../ourpages/shared/product.service';
import {ProductlistComponent} from '../../../ourpages/productlist/productlist.component';
@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  @Input() class: string;
  @Input() themeLogo: string = 'assets/images/icon/Salem Mathi Logo 5.png'; // Default Logo
  @Input() topbar: boolean = true; // Default True
  @Input() sticky: boolean = false; // Default false
  searchbox:string=''
  public stick: boolean = false;

  constructor(public ProductService:ProductService,private router: Router) { }

  ngOnInit(): void {
  }

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  	if (number >= 150 && window.innerWidth > 400) {
  	  this.stick = true;
  	} else {
  	  this.stick = false;
  	}
  }

  searchproductlist(){
    this.ProductService.searchproductslist=this.searchbox;
    this.router.navigate(['home1/product'], { queryParams: { serach: this.ProductService.searchproductslist,subid:this.ProductService.searchsubid }});
    // this.ProductlistComponent.ngOnInit(){ queryParams: { serach: this.searchbox,subid:'' } }
  }
// downloadapp(){
//     const link = document.createElement('a');
//     link.setAttribute('target', '_blank');
//     link.setAttribute('href', 'salemmathi.com/mobileapp/');
//     link.setAttribute('download', `salemmathi.apk`);
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
// }

}

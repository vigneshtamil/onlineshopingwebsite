import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../shared/shared.module';

import { OurpagesComponent } from './ourpages.component';
import { OurRoutingModule } from './ourpages-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductBoxFourComponent } from './product/product-box-four/product-box-four.component';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { AppgridComponent } from './product/appgrid/appgrid.component';
import { AppquickviewComponent } from './product/appquickview/appquickview.component';
import { ProductfullviewComponent } from './product/productfullview/productfullview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppsliderComponent } from './dashboard/appslider/appslider.component';
import { ProductboxOneComponent } from './product/productbox-one/productbox-one.component';

import { DDUKGYComponent } from './ddukgy/ddukgy.component';
import { AboutusbreadcrumbComponent } from './aboutusbreadcrumb/aboutusbreadcrumb.component';
import { TNULMComponent } from './tnulm/tnulm.component';
import { TNSRLMComponent } from './tnsrlm/tnsrlm.component';
import { TermsandbugzComponent } from './termsandbugz/termsandbugz.component';
import { PrivacyandpolicyComponent } from './privacyandpolicy/privacyandpolicy.component';
import { SitemapComponent } from './sitemap/sitemap.component';

import { LatestblogComponent } from './dashboard/latestblog/latestblog.component';
import { OverallorderlistComponent } from './overallorderlist/overallorderlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';



@NgModule({
  declarations: [    

    OurpagesComponent, ProductlistComponent, ProductBoxFourComponent, BlogComponent, BloglistComponent, AppgridComponent, AppquickviewComponent, ProductfullviewComponent, DashboardComponent, AppsliderComponent, ProductboxOneComponent, DDUKGYComponent, AboutusbreadcrumbComponent, TNULMComponent, TNSRLMComponent, TermsandbugzComponent, PrivacyandpolicyComponent, SitemapComponent,LatestblogComponent, OverallorderlistComponent, ContactusComponent, FaqComponent, OrderdetailsComponent
  ],
  imports: [
    CommonModule,
    NgxPayPalModule,
    Ng5SliderModule,
    InfiniteScrollModule,
    SharedModule,
    OurRoutingModule
  ]
})
export class OurpagesModule { }




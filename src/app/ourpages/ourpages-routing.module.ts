import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Resolver } from '../shared/services/resolver.service';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DDUKGYComponent } from './ddukgy/ddukgy.component';
import { OurpagesComponent } from './ourpages.component';
import { OverallorderlistComponent } from './overallorderlist/overallorderlist.component';
import { ProductfullviewComponent } from './product/productfullview/productfullview.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { TNSRLMComponent } from './tnsrlm/tnsrlm.component';
import { TNULMComponent } from './tnulm/tnulm.component';
import { PrivacyandpolicyComponent } from './privacyandpolicy/privacyandpolicy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'product',component:ProductlistComponent},
  {path:'productfullview',component:ProductfullviewComponent},
  {path:'blog',component:BlogComponent},
  {path:'bloglist',component:BloglistComponent},
  {path:'tnsrlm',component:TNSRLMComponent},
  {path:'ddukgy',component:DDUKGYComponent},
  {path:'tnulm',component:TNULMComponent},
  {path:'privacyandpolicy',component:PrivacyandpolicyComponent},
  {path:'orderlist',component:OverallorderlistComponent},
  {path:'orderdetails',component:OrderdetailsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'faq',component:FaqComponent}
  
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurRoutingModule { }

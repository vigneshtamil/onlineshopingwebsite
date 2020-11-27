import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Resolver } from '../shared/services/resolver.service';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OurpagesComponent } from './ourpages.component';
import { OverallorderlistComponent } from './overallorderlist/overallorderlist.component';
import { ProductfullviewComponent } from './product/productfullview/productfullview.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'product',component:ProductlistComponent},
  {path:'productfullview',component:ProductfullviewComponent},
  {path:'blog',component:BlogComponent},
  {path:'bloglist',component:BloglistComponent},
  {path:'orderlist',component:OverallorderlistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurRoutingModule { }

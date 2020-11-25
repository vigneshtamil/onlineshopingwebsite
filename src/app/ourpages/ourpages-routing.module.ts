import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Resolver } from '../shared/services/resolver.service';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { OurpagesComponent } from './ourpages.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'',component:ProductlistComponent},
  {path:'blog',component:BlogComponent},
  {path:'bloglist',component:BloglistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurRoutingModule { }

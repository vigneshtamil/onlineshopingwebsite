import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { Resolver } from '../shared/services/resolver.service';
import { OurpagesComponent } from './ourpages.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'',component:ProductlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurRoutingModule { }

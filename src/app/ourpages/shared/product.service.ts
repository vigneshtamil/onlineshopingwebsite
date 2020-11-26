import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // apiurl:String='http://localhost:3000';
  apiurl:String='http://208.109.8.9:3005';
  productlist:any[]
  searchproductslist:string=''
  constructor(private http: HttpClient) { }

  searchproducts(filterdata) {
    return this.http.post<any>(this.apiurl + `/admin/searchproducts/`,filterdata)
  }
}

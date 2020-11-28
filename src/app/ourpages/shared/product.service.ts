import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl:String=environment.apiurl
//  apiurl:String='http://localhost:3000'
  productlist:any[]
  searchproductslist:string=''
  searchsubid:string=''
  constructor(private http: HttpClient) { }

  searchproducts(filterdata) {
    return this.http.post<any>(this.apiurl + `/admin/searchproducts/`,filterdata)
  }
  getfullproductview(filterdata) {
    return this.http.post<any>(this.apiurl + `/admin/getfullproductview/`,filterdata)
  }
  addtocartservice(filterdata) {
    return this.http.post<any>(this.apiurl + `/cart/add`,filterdata)
  }
  addtowishservice(filterdata) {
    return this.http.post<any>(this.apiurl + `/wishlist/add`,filterdata)
  }
}

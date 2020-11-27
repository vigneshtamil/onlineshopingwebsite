import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl:String=environment.apiurl
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
  relatedproducts(filterdata) {
    return this.http.post<any>(this.apiurl + `/admin/relatedproductlist/`,filterdata)
  }
  latestproducts() {
    return this.http.get<any>(this.apiurl + `/admin/latest/product/`)
  }
  latestblogs() {
    return this.http.get<any>(this.apiurl + `/blog/recent`)
  }
  orderlist(data) {
    return this.http.post<any>(this.apiurl + `/admin/orderoveralllist`,data)
  }
}

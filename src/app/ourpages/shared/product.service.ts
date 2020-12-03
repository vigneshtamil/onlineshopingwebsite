import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  componentOneFn: Function;
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable()
  apiurl: String = environment.apiurl
  //  apiurl:String='http://localhost:3000'
  productlist: any[]
  searchproductslist: string = ''
  searchsubid: string = ''
  cartItems: any;
  reviewid:any
  constructor(private http: HttpClient) { }
  updateMessage(item: any) {
    this.data.next(item);
  }
  searchproducts(filterdata) {
    return this.http.post<any>(this.apiurl + `/admin/searchproducts/`, filterdata)
  }
  getfullproductview(filterdata) {
    return this.http.post<any>(this.apiurl + `/admin/getfullproductview/`, filterdata)
  }

  addtocartservice(filterdata) {
    return this.http.post<any>(this.apiurl + `/cart/add`, filterdata)
  }
  addtowishservice(filterdata) {
    return this.http.post<any>(this.apiurl + `/wishlist/add`, filterdata)
  }

  relatedproducts(filterdata) {
    return this.http.post<any>(this.apiurl + `/admin/relatedproductlist/`, filterdata)
  }
  latestproducts() {
    return this.http.get<any>(this.apiurl + `/admin/latest/product/`)
  }
  latestblogs() {
    return this.http.get<any>(this.apiurl + `/blog/recent`)
  }
  orderlist(data) {
    return this.http.post<any>(this.apiurl + `/admin/orderoveralllist`, data)

  }
  orderdetails(data) {
    return this.http.post<any>(this.apiurl + `/admin/overallorderhistorydetail`, data)
  }
  reviewadd(data){
    return this.http.post<any>(this.apiurl + `/admin/order/review`, data)
  }
  getreview(){
    return this.http.get<any>(environment.apiurl+'/blog/recent', httpOptions)
  }
}

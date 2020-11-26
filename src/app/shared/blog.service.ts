import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {HttpHeaders}  from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  url: String = environment.apiurl;
  blogservice(){
    return this.http.get<any>(environment.apiurl+'/blog/list', httpOptions)
  }
  blogcatlistservice(){
    return this.http.get<any>(environment.apiurl+'/admin/blogcategory/list', httpOptions)
  }
  blogcattopenlist(data:any){
    return this.http.post<any>(environment.apiurl+'/blog/category/list',data, httpOptions)
  }
}

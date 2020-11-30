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
export class ReviewService {

  constructor(private http: HttpClient) { }
  url: String = environment.apiurl;
  
  reviewadd(data:any){
    return this.http.post<any>(environment.apiurl+'/blog/blogdetail',data, httpOptions)
  }
}

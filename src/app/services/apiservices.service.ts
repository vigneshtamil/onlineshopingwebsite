import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  commenurl: String = environment.apiurl
//commenurl:String="http://localhost:3000"

//commenurl:String="http://localhost:3000"

//commenurl:String="http://208.109.8.9:3005"
  invokeEvent: any;
  constructor(private http: HttpClient,private router:Router) { }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // callMethodOfSecondComponent() {
  //   this.invokeEvent.next("super")
  // }
  register(data: any): Observable<any> {
    return this.http

      .post<any>(this.commenurl+'/user/login/create', data, httpOptions)

      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  catandsubcatname(): Observable<any> {
    return this.http

      .get<any>(this.commenurl+'/admin/catandcbcatname',httpOptions)

      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  otpverify(data: any): Observable<any> {

    return this.http.post<any>(this.commenurl+'/loginotp/verify', data, httpOptions)

      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  login(data: any): Observable<any> {

    return this.http.post<any>(this.commenurl+'/apk/login', data, httpOptions)

      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }

  forgetpassword(data: any): Observable<any> {

    return this.http.post<any>(this.commenurl+'/user/forgetpassword', data, httpOptions)

      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  profileupdate(data: any): Observable<any> {

    return this.http.post<any>(this.commenurl+'/user/create', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  addressupdate(data: any): Observable<any> {
    return this.http.post<any>(this.commenurl+'/user/updateadd', data, httpOptions)

      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }


  useraddresslist(data: any): Observable<any> {
    return this.http.post<any>(this.commenurl+'/user/addresslist', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  addressremove(data: any): Observable<any> {
    return this.http.post<any>(this.commenurl+'/user/delete', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }


  cartlist(data: any): Observable<any> {
    return this.http.post<any>(this.commenurl+'/cart/list', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  wishlistservice(data: any): Observable<any> {
    return this.http.post<any>(this.commenurl+'/wishlist/list', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }

  cartdelete(data: any): Observable<any> {
    return this.http.post<any>(this.commenurl+'/cartproduct/delete', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }

  wishlistdelete(data: any): Observable<any> {
    return this.http.post<any>(this.commenurl+'/wishlistproduct/delete', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  cartqtyaddservice(data: any): Observable<any> {
    return this.http.post<any>(this.commenurl+'/cartqty/add', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  addtocartservice(filterdata) {
    return this.http.post<any>(this.commenurl + `/cart/add`,filterdata)
  }
  placeorderapi(filterdata) {
    return this.http.post<any>(this.commenurl + `/order/add`,filterdata)
  }
  orderdetails(filterdata) {
    return this.http.post<any>(this.commenurl + `/admin/overallorderhistorydetail`,filterdata)
  }

  userprofiledetails(filterdata) {
    return this.http.post<any>(this.commenurl + `/user/angular/detail`,filterdata)
  }
}

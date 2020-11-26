import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, map } from "rxjs/operators";
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

  constructor(private http: HttpClient,private router:Router) { }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  register(data: any): Observable<any> {
    return this.http
      .post<any>('http://localhost:3000'+'/user/login/create', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  catandsubcatname(): Observable<any> {
    return this.http
      .get<any>('http://localhost:3000'+'/admin/catandcbcatname',httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  otpverify(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000'+'/loginotp/verify', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  login(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000'+'/apk/login', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }

  forgetpassword(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000'+'/user/forgetpassword', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
  profileupdate(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000'+'/user/create', data, httpOptions)
      .pipe(
        tap((c: any) => console.log(`sucessfully....`)),
        catchError(this.handleError<any>("falid......"))
      );
  }
}

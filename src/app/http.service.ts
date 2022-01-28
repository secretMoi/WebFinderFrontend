import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Product} from "./model/product.model";

@Injectable()
export class HttpService {
  searchUrl = 'http://localhost:5092/LdlcFinder?name=3090';

  constructor(private http: HttpClient) { }

  searchProducts(): Observable<Product[]> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*'
      })
    };

    return this.http.get<Product[]>(this.searchUrl, {
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

}

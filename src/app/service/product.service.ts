import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Product} from "../model/product.model";

@Injectable()
export class ProductService {
  products: Product[] = [];

  constructor() { }

  orderProducts(isAscendingOrder: boolean){
    if(!isAscendingOrder) {
      this.products.sort((product1, product2) => {
        if(product1.price && product2.price) {
          return product1.price < product2.price ? 1 : -1
        }
        return -1;
      });
    }

    else if(isAscendingOrder) {
      this.products.sort((product1, product2) => {
        if(product1.price && product2.price) {
          return product1.price > product2.price ? 1 : -1
        }
        return -1;
      });
    }
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Product} from "../model/product.model";

@Injectable()
export class ProductService {
  private _products: Product[] = [];
  private _originalProducts: Product[] = [];

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

  selectOnlyProductsInStock(onlyInStock: boolean) {
    console.log(onlyInStock);
    console.log(onlyInStock);
    if(onlyInStock) {
      this._products = this._originalProducts.filter(product => product.isInStock);
    }
    else {
      this._products = this._originalProducts;
    }
  }

  get products(): Product[]{
    return this._products;
  }

  set products(products: Product[]) {
    this._products = products;
    this._originalProducts = products;
  }
}

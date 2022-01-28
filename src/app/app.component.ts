import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpService} from "./http.service";
import {Product} from "./model/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('productToSearchInput', { static: false }) productToSearchInputReference!: ElementRef;

  products: Product[] = [];
  isPricerOrderAscending: boolean = true;

  constructor(private httpService: HttpService) {}

  searchProducts() {
    this.httpService.searchProducts(this.productToSearchInputReference.nativeElement.value)
      .subscribe((products: Product[]) => this.products = products);
  }

  togglePriceOrder() {
    this.isPricerOrderAscending = !this.isPricerOrderAscending;

    this.orderProducts();
  }

  orderProducts(){
    if(!this.isPricerOrderAscending) {
      this.products.sort((product1, product2) => {
        if(product1.price && product2.price) {
          return product1.price < product2.price ? 1 : -1
        }
        return -1;
      });
    }

    else if(this.isPricerOrderAscending) {
      this.products.sort((product1, product2) => {
        if(product1.price && product2.price) {
          return product1.price > product2.price ? 1 : -1
        }
        return -1;
      });
    }
  }
}

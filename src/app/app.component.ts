import { Component } from '@angular/core';
import {HttpService} from "./http.service";
import {Product} from "./model/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];

  constructor(private httpService: HttpService) {
  }

  showConfig() {
    this.httpService.searchProducts()
      .subscribe((products: Product[]) => this.products = products);
  }
}

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

  constructor(private httpService: HttpService) {}

  searchProducts() {
    this.httpService.searchProducts(this.productToSearchInputReference.nativeElement.value)
      .subscribe((products: Product[]) => this.products = products);
  }
}

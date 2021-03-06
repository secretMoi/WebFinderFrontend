import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../model/product.model";
import {HttpService} from "../service/http.service";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('productToSearchInput', { static: false }) productToSearchInputReference!: ElementRef;

  isPriceOrderAscending: boolean = true;
  isInStock: boolean = false;

  constructor(private httpService: HttpService, private productService: ProductService) { }

  ngOnInit(): void {
  }

  searchProducts() {
    this.httpService.searchProducts(this.productToSearchInputReference.nativeElement.value)
      .subscribe((products: Product[]) => {
        this.productService.products = products;
        this.setPriceOrder(true);
        this.setIsInStock(this.isInStock);
      });
  }

  togglePriceOrder() {
    this.setPriceOrder(!this.isPriceOrderAscending);
  }

  setPriceOrder(isPriceOrderAscending: boolean) {
    this.isPriceOrderAscending = isPriceOrderAscending;

    this.productService.orderProducts(this.isPriceOrderAscending);
  }

  toggleIsInStock() {
    this.setIsInStock(!this.isInStock);
  }

  setIsInStock(isInStock: boolean) {
    this.isInStock = isInStock;

    this.productService.selectOnlyProductsInStock(this.isInStock);
  }
}

import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./service/http.service";
import {FormsModule} from "@angular/forms";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductService} from "./service/product.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductListComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        FormsModule
    ],
  providers: [HttpService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

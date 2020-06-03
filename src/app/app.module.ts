import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { BuyComponent } from './buy/buy.component';
import { SellerComponent } from './seller/seller.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagesComponent,
    SearchComponent,
    AboutComponent,
    BuyComponent,
    SellerComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './product/components/add-product/add-product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { ProductItemComponent } from './product/components/product-item/product-item.component';
import { HeaderComponent } from './components/header/header.component';
import { MiniCartComponent } from './cart/components/mini-cart/mini-cart.component';
import { MiniCartItemComponent } from './cart/components/mini-cart-item/mini-cart-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductListComponent,
    ProductItemComponent,
    HeaderComponent,
    MiniCartComponent,
    MiniCartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

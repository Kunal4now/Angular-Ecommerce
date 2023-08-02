import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { ProductDetailsComponent } from './compoents/product-details/product-details.component';
// import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    // ProductItemComponent
  ],
  imports: [
    CommonModule,
    FormControl,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProductDetailsComponent
  ]
})
export class ProductModule { }

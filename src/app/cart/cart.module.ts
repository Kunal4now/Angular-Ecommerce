import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCartComponent } from './components/mini-cart/mini-cart.component';
import { MiniCartItemComponent } from './components/mini-cart-item/mini-cart-item.component';



@NgModule({
  declarations: [
    MiniCartComponent,
    MiniCartItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }

import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent {
  cartItemList: Product[] = [];
  cartTotal: number = 0;
  @Input()
  id!: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItemList = this.cartService.findAllCartItems();
    this.cartTotal = this.cartService.total
  }

  getCartTotal() {
    return this.cartService.calculateTotal()
  }

  countCartItems() {
    return this.cartService.countCartItems();
  }

}

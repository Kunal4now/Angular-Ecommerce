import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-mini-cart-item',
  templateUrl: './mini-cart-item.component.html',
  styleUrls: ['./mini-cart-item.component.css']
})
export class MiniCartItemComponent {
  @Input()
  cartItem!: Product;

  constructor(private cartService: CartService) {}

  onRemoveFromCartClick(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}

import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input()
  product!: Product;

  constructor(private cartService: CartService) {}

  onAddToCartClick(product: Product) {
    this.cartService.addToCart(product);
  }
}

import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];
  total: number = parseInt("0");

  constructor() { }

  getFromStorage() {
    const cartItemsFromStorage = sessionStorage.getItem('cartItems');

    if (cartItemsFromStorage) {
      this.cartItems = JSON.parse(cartItemsFromStorage);
    }

    return this.cartItems;
  }

  setToStorage(cartItems: Product[]) {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  calculateTotal() {
    this.cartItems = this.getFromStorage();
    if (this.cartItems.length === 0) {
      return parseInt("0");
    }
    
    return this.cartItems.map(cartItem => cartItem.price).reduce((acc, curr) => acc + curr, 0);
  }

  addToCart(product: Product) {
    this.cartItems.push(product)
    this.setToStorage(this.cartItems)
    console.log("Cart Total : " + this.total)
    // sessionStorage.setItem();
  }

  findAllCartItems() {
    return this.getFromStorage();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.getFromStorage();
    let tmpCartItems: Product[] = this.cartItems.filter((cartItem) => {
      return productId !== cartItem.id
    })
    console.log("updated Cart List : ", tmpCartItems)
    this.cartItems = [...tmpCartItems]
    this.setToStorage(this.cartItems)
  }

  countCartItems() {
    this.cartItems = this.getFromStorage();
    return this.cartItems.length
  }
}

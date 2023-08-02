import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Product } from '../product';
import { BehaviorSubject } from 'rxjs';

type Cart = {
  total: number,
  items: Product[]
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // cartItems: Product[] = [];
  cart: Cart = {
    total: 0,
    items: []
  };
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getFromStorage());
  total: number = parseInt("0");

  constructor() { }

  getFromStorage() {
    const cartItemsFromStorage = sessionStorage.getItem('cart');

    if (cartItemsFromStorage) {
      this.cart = JSON.parse(cartItemsFromStorage);
    }

    return this.cart;
  }

  setToStorage(){
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  calculateTotal() {
    this.cart = this.getFromStorage();
    if (this.cart.items.length === 0) {
      return parseInt("0");
    }
    
    return this.cart.items.map(cartItem => cartItem.price).reduce((acc, curr) => acc + curr, 0);
  }

  addToCart(product: Product) {
    this.cart.items = [...this.cart.items, product];
    this.cart.total = this.cart.items.reduce((acc, item) =>  item.price + acc, 0);
    this.setToStorage();
    this.cart$.next(this.cart);
  }

  findAllCartItems() {
    return this.getFromStorage();
  }

  // removeFromCart(productId: number) {
  //   this.cartItems = this.getFromStorage();
  //   let tmpCartItems: Product[] = this.cartItems.filter((cartItem) => {
  //     return productId !== cartItem.id
  //   })
  //   console.log("updated Cart List : ", tmpCartItems)
  //   this.cartItems = [...tmpCartItems]
  //   this.setToStorage(this.cartItems)
  // }

  countCartItems() {
    // this.cartItems = this.getFromStorage();
    // return this.cartItems.length
    return this.cart.total;
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject(this.getFromStorage());
  products$ = this.productsSubject$.asObservable()
  
  constructor() { }

  getFromStorage() {
    const productsFromStorage = sessionStorage.getItem('products');

    if (productsFromStorage) {
      this.products = JSON.parse(productsFromStorage);
    }

    return this.products;
  }

  setToStorage(products: Product[]) {
    sessionStorage.setItem('products', JSON.stringify(products));
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.setToStorage(this.products)
  }

  getAllProducts() {
    return this.getFromStorage()
  }
}

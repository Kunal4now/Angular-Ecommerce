import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productList = this.productService.getAllProducts()
  }
}

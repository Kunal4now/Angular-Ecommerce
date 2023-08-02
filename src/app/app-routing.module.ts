import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { AddProductComponent } from './product/components/add-product/add-product.component';
import { MiniCartComponent } from './cart/components/mini-cart/mini-cart.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'add',
    component: AddProductComponent
  },
  {
    path: 'cart',
    component: MiniCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

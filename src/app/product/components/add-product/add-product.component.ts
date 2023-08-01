import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductService } from '../../product.service';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private utilityService: UtilityService) {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log("adding Product")
    if (this.myForm.valid) {
      console.log("on the way")
      const newProduct: Product = {
        id: this.utilityService.generateId(),
        title: this.myForm.value.title,
        description: this.myForm.value.description,
        price: parseInt(this.myForm.value.price)
      }

      this.productService.addProduct(newProduct)
    }
  }
}

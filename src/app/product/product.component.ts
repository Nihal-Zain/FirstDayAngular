import { Component } from '@angular/core';
import { ProductsInterface } from '../products-interface';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products:ProductsInterface[]=[
    {
      image: 'imges/img2.png',
      productName: 'Wireless Mouse',
      productPrice: 25.99,
      onSale: true
    },
    {
      image: 'imges/img3.png',
      productName: 'Mechanical Keyboard',
      productPrice: 79.99,
      onSale: false
    },
    {
      image: 'imges/img4.png',
      productName: 'HD Monitor',
      productPrice: 149.99,
      onSale: true
    }
  ]
}

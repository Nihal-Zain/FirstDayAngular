import { Component } from '@angular/core';
import { CategoryInterface } from '../category-interface';
@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: CategoryInterface[] = [
    {
      image: 'imges/img5.png',
      price: 49.99
    },
    {
      image: 'imges/img4.png',
      price: 99.99
    },
    {
      image: 'imges/img2.png',
      price: 149.99
    }
  ];
  
}

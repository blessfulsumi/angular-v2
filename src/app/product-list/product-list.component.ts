import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
 buy() {
    window.alert('Buy the best product!');
  }
  userReview() {
    window.alert('Worth for money... You can buy!');
  }
  welcome(){
    window.alert('Thanks for visiting ..Come Again!!!');
  }
  onNotify(){
    window.alert('Notification');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
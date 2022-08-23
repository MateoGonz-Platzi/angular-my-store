import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  private cartProductsArray: Product[] = [];
  private cartProduct = new BehaviorSubject<Product[]>([]);
  public cartProduct$ = this.cartProduct.asObservable();

  private productArray: Product[] = [
    {
      id: '1',
      title: 'Automobil de juguete',
      price: 100,
      image: '../assets/img/image1.jpeg'
    },
    {
      id: '2',
      title: 'Muñeca de trapo',
      price: 180,
      image: '../assets/img/image2.jpeg'
    },
    {
      id: '3',
      title: 'Pelota de futbol',
      price: 120,
      image: '../assets/img/image3.jpeg'
    }
  ];

  constructor() { }

  getTotal() {
    /* this.total += product.price; */
    return this.cartProductsArray
    .reduce((sum, item) => sum + item.price, 0);
  }

  getProducts() {
    return this.productArray;
  }

  getCartProducts() {
    return this.cartProductsArray;
  }

  onAddtoShoppingCart(product: Product) {
    this.cartProductsArray.push(product);
    //💡 El observable emitirá un nuevo valor con cada producto que se agregue al carrito.
    this.cartProduct.next(this.cartProductsArray);
  }

}

import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  private cartProducts: Product[] = [];

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
    return this.cartProducts
    .reduce((sum, item) => sum + item.price, 0);
  }

  getProducts() {
    return this.productArray;
  }

  getCartProducts() {
    return this.cartProducts;
  }

  onAddtoShoppingCart(product: Product) {
    this.cartProducts.push(product);
  }

}

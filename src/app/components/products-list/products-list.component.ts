import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public total: number = 0;

  public UserProducts: Product[] = [];

  public ProductArray: Product[] = [
    {
      id: '1',
      name: 'Automobil de juguete',
      price: 100,
      image: '../assets/img/image1.jpeg'
    },
    {
      id: '2',
      name: 'Muñeca de trapo',
      price: 180,
      image: '../assets/img/image2.jpeg'
    },
    {
      id: '3',
      name: 'Pelota de futbol',
      price: 120,
      image: '../assets/img/image3.jpeg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddtoShoppingCart(product: Product) {
    this.UserProducts.push(product);
    /* this.total += product.price; */
    this.total = this.UserProducts
    .reduce((sum, item) => sum + item.price, 0);
  }

}

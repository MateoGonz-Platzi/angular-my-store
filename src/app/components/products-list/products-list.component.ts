import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { StoreServiceService } from 'src/app/services/storeService.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public total: number = 0;

  public userProducts: Product[] = [];

  public productArray: Product[] = [];

  constructor(private storeService: StoreServiceService) {
    this.userProducts = this.storeService.getCartProducts();
    this.productArray = this.storeService.getProducts();
  }

  ngOnInit() {
  }

  onAddtoShoppingCart(product: Product) {
    this.storeService.onAddtoShoppingCart(product);
    this.total = this.storeService.getTotal();
  }

}

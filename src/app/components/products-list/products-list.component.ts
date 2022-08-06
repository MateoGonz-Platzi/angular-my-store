import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreServiceService } from 'src/app/services/storeService.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public today: Date = new Date();

  public total: number = 0;

  public userProducts: Product[] = [];

  public productArray: Product[] = [];

  constructor(
    private storeService: StoreServiceService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.userProducts = this.storeService.getCartProducts();
    this.productsService.getProducts().subscribe((productList: Product[]) => {
      this.productArray = productList;
      console.log(productList);
    });
  }

  onAddtoShoppingCart(product: Product) {
    this.storeService.onAddtoShoppingCart(product);
    this.total = this.storeService.getTotal();
  }

}

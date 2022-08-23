import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from 'src/app/services/storeService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeMenu:boolean = false;
  carCounter: number = 0;

  constructor(private storeService:  StoreServiceService) { }

  ngOnInit() {
    this.storeService.cartProduct$.subscribe( cartProductArray => {
      this.carCounter = cartProductArray.length;
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}

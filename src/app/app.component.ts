import { Component } from '@angular/core';

import { Product } from './models/product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showImg: boolean = true;
  public title = 'angular-my-store';
  public imgFromFather: string = ''; //https://www.w3schools.com/howto/img_avatar.png
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


  onLoadedImg(img: string) {
    console.log(img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}

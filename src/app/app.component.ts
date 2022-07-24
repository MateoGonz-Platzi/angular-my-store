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
  


  onLoadedImg(img: string) {
    console.log(img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}

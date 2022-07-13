import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgFromFather: string = ''; //https://www.w3schools.com/howto/img_avatar.png

  title = 'angular-my-store';

  onLoadedImg(img: string) {
    console.log(img);
  }
}

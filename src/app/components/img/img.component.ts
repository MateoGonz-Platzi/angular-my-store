import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() imgFromFather: string = '';
  @Output() imgLoaded = new EventEmitter<string>();
  img: string = 'imagen_child_component.png';
  imgDefault: string = './assets/img/default.png';
  imgStatusPhrase: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  imageLoaded() {
    console.log('Image loaded');
    this.imgLoaded.emit(this.imgFromFather);
  }

  imageError() {
    this.imgFromFather = this.imgDefault;
  }
}

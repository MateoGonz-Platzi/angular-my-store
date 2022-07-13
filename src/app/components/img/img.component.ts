import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() imgFromFather: string = '';
  img: string = 'imagen_child_component.png';
  imgBase: string = './assets/img/default.png';

  constructor() { }

  ngOnInit(): void {
  }

}

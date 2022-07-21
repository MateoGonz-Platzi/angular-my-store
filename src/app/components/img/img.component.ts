import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy, OnChanges {

  //ngOnChanges
  imgFromFather: string = '';
  @Input('imgFromFather')
  set changeImg(newImg: string) {
    this.imgFromFather = newImg;
    console.log('Solo la imagen cambió', this.imgFromFather);
  }

  @Output() imgLoaded = new EventEmitter<string>();
  img: string = 'imagen_child_component.png';
  imgDefault: string = './assets/img/default.png';
  imgStatusPhrase: string = '';

  //ngDestroy vars
  counter: number = 0;
  counterFn: number | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //Cambios de todos los @Input.
    console.log('Cambió', changes);
    //Para ver los cambios de un input especifico, se debe validar.
  }

  ngOnInit(): void {
    // Intervalo por cada segundo usando el contador
    this.counterFn = window.setInterval(() => {
      // Esto puede simular un reloj en linea.
      this.counter += 1;
      console.log('Counter is runing')
    }, 1000);
  }

  //ngDestroy function
  ngOnDestroy(): void {
    // Función para detener el contador cada vez que se quita el componente.
    window.clearInterval(this.counterFn);
  }

  imageLoaded() {
    console.log('Image loaded');
    this.imgLoaded.emit(this.imgFromFather);
  }

  imageError() {
    this.imgFromFather = this.imgDefault;
  }
}

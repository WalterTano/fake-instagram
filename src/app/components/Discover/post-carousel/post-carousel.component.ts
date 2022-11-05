import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-post-carousel',
  templateUrl: './post-carousel.component.html',
  styleUrls: ['./post-carousel.component.scss']
})
export class PostCarouselComponent implements OnInit {

  @Input() posts!: Post[];

  swipeStartXPos?: number = undefined;

  // NGB Carousel reference and config
  @ViewChild('ngcarousel', { static: false }) ngCarousel!: NgbCarousel;

  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig) {
    config.interval = 0; //Se cancela que las diapo se muevan solas.
  }

  ngOnInit(): void {
  }

  captureSwipeStart($event: TouchEvent) {
    this.swipeStartXPos = $event.changedTouches[0].clientX; //Lo que hace esto es obtener la cordenada x del punto de contacto (touch) en relacion a la ventana grafica
  }

  swipePost($event: TouchEvent) {
    if (this.swipeStartXPos === undefined) {
      return;
    }

    /*Obtiene la diferencia del punto donde el usurio empezo a tocar la pantalla, y donde dejo de tocarla*/
    const swipeFinalXPos = $event.changedTouches[0].clientX;
    const xDifference = swipeFinalXPos - this.swipeStartXPos;

    if (Math.abs(xDifference) > 70) { //Si la diferencia es mayor a 70 se mueve la imagen/slide
      if (xDifference < 0) { // Si la diferencia es negatica, se mueve a la derecha.
        this.ngCarousel.next();
      } else { //Si la diferencia es positivia se mueve a la izquierda.
        this.ngCarousel.prev();
      }
    }

    this.swipeStartXPos = undefined; //Setea el punto donde el empieza a tocar.
  }

}

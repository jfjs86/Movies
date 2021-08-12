import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

  @Input() movies : Movie[] = [];
  @Output() loadMore = new EventEmitter();

  slidesOptions={
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  }

  constructor(private modalController : ModalController) { }

  ngOnInit() {}

  onClick(){

    this.loadMore.emit();

  }

  async showDetails(id:number){

    console.log('Mostrar Modal = '+id);

    const modal = await this.modalController.create({
      component : DetailsComponent,
      componentProps : {
        id : id
      }
    });

     modal.present();

  }

}

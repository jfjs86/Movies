import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from '../../interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movies : Movie[] = [];

  slidesOptions={
    slidesPerView: 1.3,
    freeMode: true
  }

  constructor(private modalController : ModalController) { }

  ngOnInit() {}

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

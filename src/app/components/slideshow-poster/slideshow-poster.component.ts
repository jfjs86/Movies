import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies : Movie[] = [];

  slidesOptions={
    slidesPerView: 3.3,
    freeMode: true
  }

  constructor(private modalController : ModalController) { }

  ngOnInit() {}

  async showDetails(id:number){
    
    const modal = await this.modalController.create({
      component : DetailsComponent,
      componentProps : {
        id : id
      }
    });

     modal.present();

  }

}

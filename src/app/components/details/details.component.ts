import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input('id') id;
  movie : MovieDetails ={};
  casts : Cast[] =[];
  hide: number = 150;

  slideOptCast ={
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  }


  constructor(private moviesService:MoviesService, private modalController:ModalController) {
    
   }

  ngOnInit() {

    this.moviesService.getMovieDetails(this.id).subscribe(
      res =>{
        console.log('DETAIL',res);
        this.movie = res;
      }
    );

    this.moviesService.getMovieCredits(this.id).subscribe(
      res =>{
        console.log('CREDITS',res);
        this.casts = res.cast;
      }
    );
    
  }

  return(){
    this.modalController.dismiss();
  }

  addFavorite(){
    console.log('Favoritos')
  }

}

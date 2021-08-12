import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  latestMovies : Movie[];
  popularMovies : Movie[] =[];


  slidesOptions={
    slidesPerView: 1.3,
    freeMode: true
  }

  constructor(private movieService : MoviesService) {}
  
  ngOnInit(): void {
    this.movieService.getLatestMovies().subscribe(
      res =>{
        this.latestMovies = res.results;
      });

      this.getPopularMovies();
      
  }

  getPopularMovies(){
    this.movieService.getPopularMovies().subscribe(
      res =>{
        const tempArr = [...this.popularMovies, ...res.results]
        this.popularMovies = tempArr;
        //this.popularMovies = res.results;
      }
    );
  }

  loadMore(){
    this.getPopularMovies();
  }

}

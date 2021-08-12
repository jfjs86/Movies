import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMdb,  MovieCredits, MovieDetails } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPages =0;

  constructor(private http:HttpClient) { }

  private executeQuery<T>( query:string){

    query = URL + query;
    query += `&api_key=${apiKey}&language=es`;

    return this.http.get<T>(query);
  }

  getLatestMovies(){  
    
    const today = new Date();
    const lastDay = new Date( today.getFullYear(), today.getMonth() +1,0).getDate();
    let month = today.getMonth() + 1;
    let monthString;

    if(month < 10){
      monthString = '0' + month;      
    }else{
      monthString = month;
    }

    const dateIni = `${today.getFullYear()}-${monthString}-01`;
    const dateEnd = `${today.getFullYear()}-${monthString}-${lastDay}`;
    
    return this.executeQuery<ResponseMdb>(`/discover/movie?primary_release_date.gte=${dateIni}&primary_release_date.lte=${dateEnd}`);
  }

  getPopularMovies(){
    this.popularPages++;
    return this.executeQuery<ResponseMdb>(`/discover/movie?sort_by=popularity.desc&page=${this.popularPages}`);

  }

  getMovieDetails(id:number){
    return this.executeQuery<MovieDetails>(`/movie/${id}?a=1`);
  }

  getMovieCredits(id:number){
    return this.executeQuery<MovieCredits>(`/movie/${id}/credits?a=1`);
  }


}

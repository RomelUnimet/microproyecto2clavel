import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import {MovieInterface} from '../../Models/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public m:any[];

  constructor( public movie :MoviesService , private router:Router) {
    this.m=this.movie.movies;


   }

  ngOnInit() {
    
  }

  onSelect(title:string){
    this.router.navigate( ['/movie', title ] )

  }

  

}

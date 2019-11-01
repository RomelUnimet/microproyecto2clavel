import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  public m:any[];

  constructor( public movie :MoviesService) {
    this.m=this.movie.movies;


   }

  ngOnInit() {
  }

}

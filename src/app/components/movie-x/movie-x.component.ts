import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-x',
  templateUrl: './movie-x.component.html',
  styleUrls: ['./movie-x.component.scss']
})
export class MovieXComponent implements OnInit {

  public movieTitle;

  public m:any[];

  constructor(private route: ActivatedRoute,public movie :MoviesService , private router:Router) { 
    this.m=this.movie.movies;
  }

  ngOnInit() {
    let pelicula= this.route.snapshot.paramMap.get('title');
    this.movieTitle=pelicula;

    console.log(this.movieTitle);
  }
  isMovie(string:string){

    var isMovie=false;

    if(string==this.movieTitle){
      isMovie=true;
    }
    return isMovie;

  }

  onSelect(title:string){
    console.log(title);
    this.router.navigate( ['/reserva', title ] )

  }

}

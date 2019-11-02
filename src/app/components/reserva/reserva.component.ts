import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import {ReservaInterface} from  '../../Models/reserva';
import { ReserveService } from 'src/app/services/reserve.service';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  public movieTitle;

  public reserva:ReservaInterface={
     name:'',
     email:'',
     tickets:'',
     movie:'',
  }
  
  
  
  
  
 

  constructor(private route: ActivatedRoute,public movie :MoviesService , private router:Router, private reserveService:ReserveService) { }

  ngOnInit() {
    let pelicula= this.route.snapshot.paramMap.get('title');
    this.movieTitle=pelicula;
    console.log(this.movieTitle);
  }

  reserve(){
    this.reserva.movie=this.movieTitle;

    if (this.reserva.name!='' && this.reserva.email!='' && this.reserva.tickets!=''){

      this.reserveService.addItem(this.reserva);

      this.reserva.name='';
      this.reserva.email='';
      this.reserva.tickets='';
      this.reserva.movie='';

  }
  
  console.log(this.reserva);

}

}

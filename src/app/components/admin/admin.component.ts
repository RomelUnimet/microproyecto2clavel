import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve.service';
import { ReservaInterface } from 'src/app/Models/reserva';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  items:ReservaInterface[];

  constructor(public reserves: ReserveService) {}

  ngOnInit() {

    this.reserves.getItems().subscribe(items =>{this.items=items});
  }

}

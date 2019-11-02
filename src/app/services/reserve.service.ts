import { Injectable } from '@angular/core';
import { ReservaInterface } from '../Models/reserva';
import {AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  itemsCollection:AngularFirestoreCollection<ReservaInterface>
  items: Observable<ReservaInterface[]>;

  constructor(public afs: AngularFirestore) { 
    
    this.items= this.afs.collection('items').valueChanges();
    
  }

  getItems(){
    return this.items;
  }


  addItem(reserva:ReservaInterface){

    this.itemsCollection.add(reserva);

  }

}

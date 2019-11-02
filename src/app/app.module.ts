import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { HomeComponent } from './components/home/home.component';
import { MovieXComponent } from './components/movie-x/movie-x.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import {ReserveService} from './services/reserve.service'
import {MoviesService} from './services/movies.service';
import { AdminComponent } from './components/admin/admin.component'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MoviesComponent,
    ComingSoonComponent,
    HomeComponent,
    MovieXComponent,
    ReservaComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ReserveService,MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

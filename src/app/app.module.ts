import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    MoviesComponent,
    ComingSoonComponent,
    HomeComponent,
    MovieXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

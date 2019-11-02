import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieXComponent } from './components/movie-x/movie-x.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie/:title', component: MovieXComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

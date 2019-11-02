import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieXComponent } from './components/movie-x/movie-x.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'movie/:title', component: MovieXComponent},
  {path: 'reserva/:title', component: ReservaComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

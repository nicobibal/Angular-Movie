import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: ListMovieComponent },
  { path: 'details/:id', component: DetailsComponent },

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ListMovieComponent } from './list-movie/list-movie.component';

const routes: Routes = [
  { path: '', component: ListMovieComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }

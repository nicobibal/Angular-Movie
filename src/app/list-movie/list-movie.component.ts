import { Component, OnInit } from '@angular/core';
import { Movie } from '../types';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})


export class ListMovieComponent implements OnInit {
  movies: Movie[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies()
      .subscribe(
        movies => this.movies = movies
      );
      
  }

}

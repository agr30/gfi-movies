import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/model/movie';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.scss']
})
export class UserFavoritesComponent implements OnInit {
  movies: Movie;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('favoritesMovies')) {
      this.movies = JSON.parse(localStorage.getItem('favoritesMovies'));
    }
  }
}

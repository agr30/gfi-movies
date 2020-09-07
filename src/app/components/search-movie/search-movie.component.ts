import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../../shared/model/movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  searchForm: FormGroup;
  movies: Movie;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  searchMovie(): void {
    const movieTitle = this.searchForm.get('title').value;
    this.userService.getMovies(movieTitle)
      .subscribe(data => {
        this.movies = data;
      });
  }

  saveMovie(): void {
    const favMovie = {
      Title: this.movies.Title,
      Plot: this.movies.Plot,
      Poster: this.movies.Poster
    };
    if (!localStorage.getItem('favoritesMovies')) {
      const newFavs = new Array();
      newFavs.push(favMovie);
      localStorage.setItem('favoritesMovies', JSON.stringify(newFavs));
    } else {
      const favoritesMovies = JSON.parse(localStorage.getItem('favoritesMovies'));
      favoritesMovies.push(favMovie);
      localStorage.setItem('favoritesMovies', JSON.stringify(favoritesMovies));
    }
  }

}

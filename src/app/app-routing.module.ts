import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {SearchMovieComponent} from './components/search-movie/search-movie.component';
import {UserFavoritesComponent} from './components/user-favorites/user-favorites.component';
import {AuthGuardService} from './shared/guards/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: SearchMovieComponent, canActivate: [AuthGuardService] },
  { path: 'myfavs', component: UserFavoritesComponent, canActivate: [AuthGuardService] },
  { path : '', component : LoginComponent},
  { path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

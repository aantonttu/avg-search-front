import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: 'movies', component: HomePageComponent},
  { path: 'movies/details', component: MovieDetailsComponent},
  { path: 'movies/sorted', component: HomePageComponent},
  { path: 'movies/find', component: HomePageComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserManagementComponent} from './user-management/user-management.component';

const routes: Routes = [
  { path: 'movies', component: HomePageComponent},
  { path: 'movies/details', component: MovieDetailsComponent},
  { path: 'movies/sorted', component: HomePageComponent},
  { path: 'movies/find', component: HomePageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UserManagementComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

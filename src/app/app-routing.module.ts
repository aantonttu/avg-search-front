import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  { path: 'movies', component: HomePageComponent},
  { path: 'movies/sorted', component: HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

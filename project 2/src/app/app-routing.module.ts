import { HeroTourComponent } from './hero-tour/hero-tour.component';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'main', component: HeroTourComponent},
  {path: 'detail/:id', component: HeroesDetailsComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

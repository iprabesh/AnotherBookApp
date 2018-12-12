import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { BestComponent } from './best/best.component';
import { NewreleaseComponent } from './newrelease/newrelease.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'comingsoon', component: ComingsoonComponent},
  { path: 'best', component: BestComponent},
  { path: 'newrelease', component: NewreleaseComponent},
  {path: 'addbook', component: AddbookComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

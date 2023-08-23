import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/Home.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'Home', component:HomeComponent
  },
  {
    path: 'VisitorLog', component:HomeComponent
  },
  {
    path: 'LatestNews', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeAppRoutingModule { }

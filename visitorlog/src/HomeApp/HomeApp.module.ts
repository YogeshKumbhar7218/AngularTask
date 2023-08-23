import { NgModule } from '@angular/core';
import { MasterPageComponent } from './masterPage/MasterPage.component';
import { HomeComponent } from './home/Home.component';
import { HomeAppRoutingModule } from './HomeApp-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeAppRoutingModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeAppModule { }

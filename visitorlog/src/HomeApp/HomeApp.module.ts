import { NgModule } from '@angular/core';
import { MasterPageComponent } from './masterPage/MasterPage.component';
import { HomeAppRoutingModule } from './HomeApp-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AddLogComponent } from './addLog/AddLog.component';
import { CheckLogComponent } from './checkLog/CheckLog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MasterPageComponent,
    AddLogComponent,
    CheckLogComponent
  ],
  imports: [
    BrowserModule,
    HomeAppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeAppModule { }

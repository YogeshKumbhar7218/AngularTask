import { NgModule } from '@angular/core';

import { HomeAppRoutingModule } from './HomeApp-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AddLogComponent } from './addLog/AddLog.component';
import { CheckLogComponent } from './checkLog/CheckLog.component';
import { VisitorMenuPageComponent } from './visitorMenuPage/VisitorMenuPage.component';

@NgModule({
  declarations: [
    AddLogComponent,
    CheckLogComponent
  ],
  imports: [
    BrowserModule,
    HomeAppRoutingModule
  ],
  providers: [],
  bootstrap: [VisitorMenuPageComponent]
})
export class VisitorAppModule { }

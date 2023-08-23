import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLogComponent } from './addLog/AddLog.component';
import { CheckLogComponent } from './checkLog/CheckLog.component';

const routes: Routes = [
  {
    path: 'Add', component:AddLogComponent
  },
  {
    path: 'Check', component:CheckLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAppRoutingModule { }

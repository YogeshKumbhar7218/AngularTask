import { NgModule } from '@angular/core';
import { LatestNewsAppRoutingModule } from './LatestNewsApp-routing.module';
import { NewsComponent } from './News/News.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewsComponent

  ],
  imports: [
    CommonModule,
    LatestNewsAppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [NewsComponent]
})
export class LatestNewsAppModule { }

import { Component } from '@angular/core';

@Component({
  templateUrl: './CheckLog.component.html',
  styleUrls: ['./CheckLog.component.css']
})
export class CheckLogComponent {
  logs: Array<any> = new Array<any>();
  numberOfEntries: number = 0;
  constructor() {
    this.numberOfEntries = Number(localStorage.getItem('numberOfEntries'));
    if (this.numberOfEntries > 0) {
      for (let i = 1; i <= this.numberOfEntries; i++){
        let obj = JSON.parse((localStorage.getItem(String(i)) || '{}'));
        this.logs.push(obj);
      }
    }
    console.log(this.logs);
  }


}

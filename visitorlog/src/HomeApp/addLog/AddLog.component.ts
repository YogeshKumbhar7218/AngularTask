import { Component } from '@angular/core';
import { Log } from './Log.model';

@Component({
  templateUrl: './AddLog.component.html',
  styleUrls: ['./AddLog.component.css']
})
export class AddLogComponent {
  log: Log = new Log();

  //Drop down
  typeOfVisit: Array<String> = ["Meeting", "Delivery", "Personal"];
  //local storage object count
  numberOfEntries: number = 0;

  constructor() {
    //if object count is 'null' then set to 0 or else get the count from local storage
    if (localStorage.getItem('numberOfEntries') == null) {
      localStorage.setItem('numberOfEntries', '0');
    } else {
      this.numberOfEntries = Number(localStorage.getItem('numberOfEntries'));
      console.log(this.numberOfEntries);
    }
      
    console.log( localStorage.getItem('1'));
    this.log.dateOfEntry = (new Date()).toISOString().substring(0, 10);
  }
  

  Save() {
    //save into local storage
    //create DTO
    let dto = {
      name: this.log.name,
      email: this.log.email,
      typeOfVisit: this.log.typeOfVisit,
      personToVisit: this.log.personToVisit,
      dateOfEntry: this.log.dateOfEntry,
      timeOfEntry: this.log.timeOfEntry,
      timeOfExit: this.log.timeOfExit,
    };
    //number of entries ++
    this.numberOfEntries = this.numberOfEntries + 1;
    localStorage.setItem('numberOfEntries', String(this.numberOfEntries));

    //insert entry in local storage
    localStorage.setItem(String(this.numberOfEntries), JSON.stringify(dto));
    
    //Get new entry
    this.log = new Log();
    this.log.dateOfEntry = (new Date()).toISOString().substring(0, 10);
  }

  hasError(typeofvalidator: string, controlname: string):boolean {
    return this.log.
      formLogGroup.
      controls[controlname].
      hasError(typeofvalidator);
  }
}

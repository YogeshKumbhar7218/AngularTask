import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Log{
    name: string = "";
    email: string = "";
    // typeOfVisit: string = "";
    typeOfVisit: string="";
    personToVisit: string = "";
    dateOfEntry: string = "";
    timeOfEntry: string = "";
    timeOfExit: string = "";
    formLogGroup !: FormGroup;

    constructor() {
        let _builder = new FormBuilder();
        this.formLogGroup = _builder.group({});
        this.formLogGroup.addControl('nameControl', new FormControl('', Validators.required));

        let validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.email);
        
        this.formLogGroup.addControl('emailControl', new FormControl('', Validators.compose(validationcollection)));
        this.formLogGroup.addControl('typeOfVisitControl', new FormControl('', Validators.required));
        this.formLogGroup.addControl('personToVisitControl', new FormControl('', Validators.required));
        this.formLogGroup.addControl('timeOfEntryControl', new FormControl('', Validators.required));
        this.formLogGroup.addControl('timeOfExitControl', new FormControl('', Validators.required));
    }
}


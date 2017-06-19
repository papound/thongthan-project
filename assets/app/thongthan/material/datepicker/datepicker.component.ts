import {Component, Input } from '@angular/core';
import moment = require("moment");


@Component({
    selector: 'app-datepicker',
    templateUrl: 'datepicker.component.html',
    styles: []
})

export class DatepickerMaterial{

    @Input() value: Date;

    printDate(){
        console.log(moment(this.value).format("DD/MM/YYYY"));
    }
}
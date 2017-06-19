import {Directive, Input, OnChanges} from "@angular/core";


@Directive({ selector: 'input[mdDatepicker]'})

export class datePicker implements OnChanges{

    @Input() value: Date;

    ngOnChanges(){
        console.log(this.value);
    }
}
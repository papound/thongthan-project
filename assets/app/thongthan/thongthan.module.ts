import {NgModule} from "@angular/core";
import {ThongthanComponent} from "./thongthan.component";
import {CommonModule} from "@angular/common";
import {FUModule} from "../upload/upload.module";
import {FileUploadModule} from "ng2-file-upload";
import {uploadComponent} from "../upload/upload.component";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {FormsModule} from "@angular/forms";
import {DatepickerMaterial} from "./material/datepicker/datepicker.component";
import {BrowserModule} from "@angular/platform-browser";
import {MdCardModule, MdInputModule, MdNativeDateModule} from '@angular/material';
import {MdDatepickerModule} from '@angular/material';
import {datePicker} from "./material/datepicker/datepicker.directive";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FUModule,
        FileUploadModule,
        AngularMultiSelectModule,
        FormsModule,
        MdInputModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdCardModule
    ],
    declarations: [
        ThongthanComponent,
        uploadComponent,
        DatepickerMaterial,
        datePicker
    ]
})
export class ThongthanModule {
}
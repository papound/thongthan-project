import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {ThongthanComponent} from "./thongthan.component";
import {CommonModule} from "@angular/common";
import {FUModule} from "../upload/upload.module";
import {FileUploadModule} from "ng2-file-upload";
import {uploadComponent} from "../upload/upload.component";
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MdButtonModule, MdCardModule, MdInputModule, MdNativeDateModule} from '@angular/material';
import {MdDatepickerModule} from '@angular/material';
import {MdDataTableModule} from "ng2-md-datatable";


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
        MdCardModule,
        MdButtonModule,
        MdDataTableModule
    ],
    declarations: [
        ThongthanComponent,
        uploadComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThongthanModule {
}
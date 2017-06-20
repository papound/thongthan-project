import {Component, Input, OnInit} from '@angular/core';
import {Branch} from "./branch.model";
import {ThongthanService} from "./thongthan.service";
import {NgForm} from "@angular/forms";
import moment = require("moment");
import {ErrorService} from "../errors/error.service";
import {Error} from "../errors/error.model";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-dropdown',
    templateUrl: './thongthan.component.html',
})

export class ThongthanComponent implements OnInit{

    //Brand
    @Input() BrandValue: any;

    //LotNo
    @Input() LotNumber: any;

    //Fabric Amount
    @Input() FabricAmount: any;

    //Date

    //Size
    SizeList = [];
    SizeSelectedItems = [];
    SizeDropdownSettings = {};

    //Branch
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    branches: Branch[];

    //Service
    constructor(private thongthanService: ThongthanService, private errorService: ErrorService) {
    }

    submitted = false;

    //Date
    @Input() DateValue: Date;

    printDate() {
        console.log(moment(this.DateValue).format("DD/MM/YYYY"));
    }


    ngOnInit(){

        //Branch
        const BranchDDList = [];
        const BranchDDObj = function (id, itemName) {
            this.id = id;
            this.itemName = itemName;
        };

        this.thongthanService.getBranches()
            .subscribe(
                (branches: Branch[]) => {
                    this.branches = branches;
                    //console.log(branches);

                    for(var i = 0; i < this.branches.length; i++){
                        const push_obj = new BranchDDObj(i+1, this.branches[i].Name);
                        BranchDDList.push(push_obj);
                    }
                }
            );

        this.dropdownList = BranchDDList;

        this.selectedItems = [];

        this.dropdownSettings = {
            singleSelection: false,
            text:"เลือก แผนก",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 5,
            classes:"myclass custom-class",
            limitSelection: 1
        };

        //Size
        this.SizeList = [
            {"id": 1, "itemName": "S"},
            {"id": 2, "itemName": "M"},
            {"id": 3, "itemName": "L"},
            {"id": 4, "itemName": "XL"},
            {"id": 5, "itemName": "2XL"},
            {"id": 6, "itemName": "3XL"},
            {"id": 7, "itemName": "4XL"}
        ];

        this.SizeSelectedItems = [];

        this.SizeDropdownSettings = {
            singleSelection: false,
            text:"เลือก ไซส์",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 7,
            classes:"myclass custom-class",
            limitSelection: null
        };

    }
    onItemSelect(item:any){
        console.log(item);

        if(this.SizeSelectedItems.length > 0 && this.selectedItems.length == 0){
            console.log(this.SizeSelectedItems);
        }else{
            console.log("Branch");
            console.log(this.selectedItems);
            console.log("Size");
            console.log(this.SizeSelectedItems);
        }

    }
    OnItemDeSelect(item:any){
        console.log(item);

        if(this.SizeSelectedItems.length > 0 && this.selectedItems.length == 0){
            console.log(this.SizeSelectedItems);
        }else{
            console.log("Branch");
            console.log(this.selectedItems);
            console.log("Size");
            console.log(this.SizeSelectedItems);
        }
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }

    printBrand(){
        console.log(this.BrandValue);
    }
    printFabricAmount(){
        console.log(this.FabricAmount);
    }
    printLotNo(){
        console.log(this.LotNumber);
    }

    @Input() date: any;

    onSubmit(form: NgForm) {

        if (this.submitted == true) {
            console.log(form.value.brand);
            console.log(form.value.lotNo);
            console.log(moment(form.value.date).format("DD/MM/YYYY"));
            console.log(form.value.fa);

            if (this.SizeSelectedItems.length > 0 && this.selectedItems.length == 0) {
                console.log(this.SizeSelectedItems);
            } else {
                console.log("Branch");
                console.log(this.selectedItems);
                console.log("Size");
                console.log(this.SizeSelectedItems);
            }
        } else {
            console.log("Form is Reset!!");
            var error_e = new Error("Form has been Reset!!", "Please fill your information again");
            this.errorService.handleError(error_e);
            return Observable.throw(error_e);
        }
    }

    formReset() {
        console.log("Form is Reset!!");
        var error_e = new Error("Form has been Reset!!", "Please fill your information again");
        this.errorService.handleError(error_e);
        return Observable.throw(error_e);
    }

}
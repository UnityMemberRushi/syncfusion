import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { FormValidator, FormValidatorModel, FormValidators } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-syncfusion',
  templateUrl: './syncfusion.component.html',
  styleUrls: ['./syncfusion.component.css']
})
export class SyncfusionComponent implements OnInit {
  submitted: boolean | any;
  public formObject: FormValidator | any;
  dateMax = new Date();
  formgroup: FormGroup | any; 
  
  constructor(private _fb: FormBuilder){}
  ngOnInit(): void {
    this.formgroup = this._fb.group({
      dropdown: ['',Validators.required],
      ejsDate: [null, [Validators.required]],
      name: ['',Validators.required],
      multiselect: ['',Validators.required]
    })
  }
 
  @ViewChild('sample')
  public listObj: DropDownListComponent | any;
  // define the JSON of data
  public sportsData: Object[] = [
      { Id: 'Game1', Game: 'American Football' },
      { Id: 'Game2', Game: 'Badminton' },
      { Id: 'Game3', Game: 'Basketball' },
      { Id: 'Game4', Game: 'Cricket' },
      { Id: 'Game5', Game: 'Football' },
      { Id: 'Game6', Game: 'Golf' },
      { Id: 'Game7', Game: 'Hockey' },
      { Id: 'Game8', Game: 'Rugby' },
      { Id: 'Game9', Game: 'Snooker' },
      { Id: 'Game10', Game: 'Tennis' }
  ];
  public fields: Object = { text: 'Game', value: 'Id' };

  
  public data: Object[] = [
    {Id:'Game1', Game:'Badminton'},
    {Id:'Game2', Game:'Cricket'},
    {Id:'Game3', Game:'Football'},
    {Id:'Game4', Game:'Golf'}, 
    {Id:'Game5', Game:'Hockey'},
    {Id:'Game6', Game:'Rugby'}
  ];
  public multi: Object = { text: 'Game', value: 'Id'}
  public value = 'Game1';
  public onSelect(args:any){
    if(this.value !== null){
      this.formgroup.get('multiselect').errors = false;
    }
  }
  
  get f():{ [key: string ]: AbstractControl}{
    return this.formgroup.controls;
  } 

  signup(){
    this.submitted = true;
    if(this.formgroup.invalid){
      return;
    }else if(this.formgroup.valid){
    console.log(this.formgroup.value)
    }
  }
}

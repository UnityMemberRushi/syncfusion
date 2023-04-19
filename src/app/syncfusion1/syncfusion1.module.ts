import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Syncfusion1RoutingModule } from './syncfusion1-routing.module';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { enableRipple } from '@syncfusion/ej2-base';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

enableRipple(true);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Syncfusion1RoutingModule,
    QueryBuilderModule,
    GridModule,
    DocumentEditorModule,
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule,
    DropDownListModule,
    MultiSelectModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Syncfusion1Module { }

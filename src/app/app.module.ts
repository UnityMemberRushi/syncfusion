import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';


@NgModule({
  declarations: [
    AppComponent,
    SyncfusionComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule,
    DropDownListModule,
    MultiSelectModule,
    QueryBuilderModule,
    GridModule,
    DocumentEditorModule,
    HttpClientModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

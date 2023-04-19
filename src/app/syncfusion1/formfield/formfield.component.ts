import { Component, OnInit } from '@angular/core';
import { RuleModel } from '@syncfusion/ej2-angular-querybuilder';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent implements OnInit {
  public importRules: RuleModel | any;
  public pageSettings: PageSettingsModel | any;
  public values: string[] = ['Mr.', 'Mrs.'];

  ngOnInit(): void {
      this.importRules = {
      'condition': 'and',
      'rules': [{
              'label': 'Employee ID',
              'field': 'EmployeeID',
              'type': 'number',
              'operator': 'equal',
              'value': 1
          },
          {
              'label': 'Title',
              'field': 'Title',
              'type': 'string',
              'operator': 'equal',
              'value': 'Sales Manager'
          }]
      };
  }
}

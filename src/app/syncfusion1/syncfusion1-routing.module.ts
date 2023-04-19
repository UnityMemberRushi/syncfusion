import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormfieldComponent } from './formfield/formfield.component';
import { FormtreeviewComponent } from './formtreeview/formtreeview.component';
import { FormdisplayComponent } from './formdisplay/formdisplay.component';
import { FormtypeComponent } from './formtype/formtype.component';


const routes: Routes = [
  {path:'', component: FormtypeComponent},
  {path:'formfeild', component: FormfieldComponent},
  {path:'treeview', component: FormtreeviewComponent},
  {path:'display',component: FormdisplayComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Syncfusion1RoutingModule { }

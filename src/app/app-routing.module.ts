import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SyncfusionComponent } from './syncfusion/syncfusion.component';

const routes: Routes = [
  {path: 'syncfusion', component: SyncfusionComponent},
  {path:'', loadChildren:()=>import('./syncfusion1/syncfusion1.module').then(m=>m.Syncfusion1Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

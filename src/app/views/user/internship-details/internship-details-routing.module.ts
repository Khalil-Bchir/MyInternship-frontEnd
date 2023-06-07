import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipDetailsComponent } from './internship-details/internship-details.component';

const routes: Routes = [
  { path:'',component:InternshipDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipDetailsRoutingModule { }

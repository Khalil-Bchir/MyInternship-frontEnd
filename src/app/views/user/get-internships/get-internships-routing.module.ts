import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetInternshipsComponent } from './get-internships/get-internships.component';

const routes: Routes = [
  { path: '', component:GetInternshipsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetInternshipsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInternshipsRoutingModule } from './get-internships-routing.module';
import { GetInternshipsComponent } from './get-internships/get-internships.component';


@NgModule({
  declarations: [
    GetInternshipsComponent
  ],
  imports: [
    CommonModule,
    GetInternshipsRoutingModule
  ]
})
export class GetInternshipsModule { }

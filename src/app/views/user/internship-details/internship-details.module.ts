import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternshipDetailsRoutingModule } from './internship-details-routing.module';
import { InternshipDetailsComponent } from './internship-details/internship-details.component';


@NgModule({
  declarations: [
    InternshipDetailsComponent
  ],
  imports: [
    CommonModule,
    InternshipDetailsRoutingModule
  ]
})
export class InternshipDetailsModule { }

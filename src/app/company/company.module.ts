import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { ReactiveFormsModule } from '@angular/forms';

console.log("Company Module.....");
@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    UpdateDataComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }

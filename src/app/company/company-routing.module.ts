import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [
  {
    path:"", component:CompanyComponent,
    children:[
      {
        path:'company-list', component:CompanyListComponent,
        children:[
          {
            path:'companydetail/:id',component:CompanyDetailsComponent,
            
          },
          {
            path:'data123',component:UpdateDataComponent
          }
          
        ]
      }
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

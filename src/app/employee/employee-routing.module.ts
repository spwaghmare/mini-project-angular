import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [
  {
    path:"", component:EmployeeComponent,
    children:[
      {
        path:"Employee-list", component:EmployeeListComponent,
        children:[
          {
            path:"employeedetail/:id", component:EmployeeDetailsComponent
          },
          {
            path:"update",component:UpdateDataComponent
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
export class EmployeeRoutingModule { }

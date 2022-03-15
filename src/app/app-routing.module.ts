import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyComponent } from './company/company/company.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { Headerroutes } from './header/header-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"",redirectTo:"Login",pathMatch:"full"
  },
  {
    path:"Login",component:LoginComponent
  },
  {
    path:"Login/register",component:RegistrationComponent
  },
  {
    path:"Login/register-company",component:RegisterCompanyComponent
  },
  {
    path:"Login/header", component:HeaderComponent,children:Headerroutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

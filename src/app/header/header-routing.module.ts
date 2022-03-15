import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RegistrationComponent } from '../registration/registration.component';

export const Headerroutes: Routes = [
  {
    path:"Employee",
    loadChildren:()=>import('src/app/employee/employee.module').then(module=>module.EmployeeModule)
  },
  {
    path:"Company", 
    loadChildren:()=>import('src/app/company/company.module').then(module=>module.CompanyModule)
  },
  {path:"AboutUS", component:AboutUsComponent},
  {path:"Dashboard",component:DashbordComponent},
  {path:"Login",component:LoginComponent},
  {path:"ContactUs",component:ContactUsComponent},
  {path:"PageNotFound",component:PageNotFoundComponent},
  
  {path:"register",component:RegistrationComponent},
  {path:"header",component:DashbordComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(Headerroutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }

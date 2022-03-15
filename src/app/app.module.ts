import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { CompanyModule} from './company/company.module'
import { EmployeeModule } from './employee/employee.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component'
import { HeaderModule } from './header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';


console.log("AppModule load....")
@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    UpdateComponent,
    RegisterCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Commented for Lazy loading
    // CompanyModule,
    // EmployeeModule,
    HeaderModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

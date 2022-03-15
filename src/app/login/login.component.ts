import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { Employee } from '../model/employee';
import { CommanServiceService } from '../shared/comman-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup
  
  constructor(private router:Router,private fb:FormBuilder,private cs:CommanServiceService) { }

  ngOnInit(): void {
    this.loginform=this.fb.group(
      {
        username:[''],
        password:['']  
      }
    )
  }
  emp:any;
  logindata()
  {
      this.emp=this.cs.logics();
      
      this.router.navigate(['Login/header']);
  }

}

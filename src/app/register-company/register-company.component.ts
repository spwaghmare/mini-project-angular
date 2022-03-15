import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommanServiceService } from '../shared/comman-service.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  constructor(private fb:FormBuilder,private cs:CommanServiceService) { }
  cmpform:FormGroup;
  ngOnInit(): void {
    this.cmpform=this.fb.group(
      {
      id: [],
      cname: [''],
      email: [''],
      clocation : [''],
      ctype : [''],
      cperson : [''],
      mobile : ['']
      }
      )
  }
  registerdata()
  {
    alert("success");
    this.cs.postcmpdata(this.cmpform.value).subscribe();
  }

}

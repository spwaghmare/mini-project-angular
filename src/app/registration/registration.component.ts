import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../model/employee';
import { CommanServiceService } from '../shared/comman-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private cs:CommanServiceService) { }

  registergroup:FormGroup
  ngOnInit(): void {
    this.registergroup=this.fb.group(
      {
        id:[],
        uname:[''],
        umail:[''],
        mobile:[''],
        designation:[''],
        username:[''],
        password:['']  
      }
    )
  }
  emp:Employee;
  registration()
  {
    alert("success");
    console.log(this.registergroup.value.uname);
    this.emp=this.registergroup.value;
     this.cs.postdata(this.emp).subscribe();

  }
}

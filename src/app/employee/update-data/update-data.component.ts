import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { CommanServiceService } from 'src/app/shared/comman-service.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {

  constructor(private fb:FormBuilder,private cs:CommanServiceService,private location:Location) { }
  updateform:FormGroup;
  ngOnInit(): void {
    this.updateform=this.fb.group({
      id:[],
    uname:[''],
    umail:[''],
    mobile:[''],
    designation:[''],
    username:[''],
    password:[''],
    });
    this.edit();
  }
  edit()
  {
    let emp1:any = this.location.getState();
    if(emp1.id!=0)
    {
      this.updateform.get('id').setValue(emp1.id);
      this.updateform.get('uname').setValue(emp1.uname);
      this.updateform.get('umail').setValue(emp1.umail);
      this.updateform.get('mobile').setValue(emp1.mobile);
      this.updateform.get('designation').setValue(emp1.designation);
      this.updateform.get('username').setValue(emp1.username);
      this.updateform.get('password').setValue(emp1.password);
    }
  }

  updatedata()
  {
    this.cs.updateEmp(this.updateform.value).subscribe();
    
  }

  back()
  {
    this.location.back();
  }
}

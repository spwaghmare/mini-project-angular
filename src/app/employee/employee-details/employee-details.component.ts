import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommanServiceService } from 'src/app/shared/comman-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  emp1:Employee;
  constructor(private routes:ActivatedRoute,private cs:CommanServiceService,private location:Location) { }

  ngOnInit(): void {
    // let empId=parseInt(this.routes.snapshot.paramMap.get('id'));
    // this.cs.getbyId(empId).subscribe(data=>{
    //   this.emp1=data;
    // })
    this.routes.paramMap.subscribe(param1=>{
      this.cs.getbyId(parseInt(param1.get('id'))).subscribe(data=>{
        this.emp1=data
      })
    })
  }

  back()
  {
    this.location.back();
  }
}

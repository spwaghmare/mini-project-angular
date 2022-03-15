import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommanServiceService } from 'src/app/shared/comman-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public cs1:CommanServiceService) { }
  emp:Employee;
  ngOnInit(): void {
    this.cs1.logics().subscribe(data=>{
      this.emp=data;
    });
  }

  deletedata(id:number)
  {
    alert(id);
    this.cs1.deletebyid(id).subscribe();
    window.location.reload();
  }

  editedata(id:number)
  {

  }
}

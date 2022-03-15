import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CommanServiceService } from 'src/app/shared/comman-service.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private cs:CommanServiceService) { }
  cmp:Company;
  ngOnInit(): void {
    this.cs.getclist().subscribe(data=>{
      this.cmp=data;
    });
  }

}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CommanServiceService } from 'src/app/shared/comman-service.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  cmp:Company;

  constructor(private location:Location,private router:ActivatedRoute,private cs:CommanServiceService) { }

  ngOnInit(): void {
    // let cmpId=parseInt(this.router.snapshot.paramMap.get('id'));
    // this.cs.getCmpById(cmpId).subscribe(data=>{
    //   this.cmp=data;
    // });

    this.router.paramMap.subscribe(pm=>{
      this.cs.getCmpById(parseInt(pm.get('id'))).subscribe(data=>{
        this.cmp=data;
      })
    })
  }

  back()
  {
    this.location.back();
  }
}

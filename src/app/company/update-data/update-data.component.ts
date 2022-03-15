import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommanServiceService } from 'src/app/shared/comman-service.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  updateform:FormGroup;
  constructor(private cs:CommanServiceService,private fb:FormBuilder,private location:Location) { }

  ngOnInit(): void {
    this.updateform=this.fb.group(
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
    this.edit();
  }

  edit()
  {
    let cmp:any=this.location.getState();
    if(cmp.id!=0)
    {
      this.updateform.get('id').setValue(cmp.id);
      this.updateform.get('cname').setValue(cmp.cname);
      this.updateform.get('email').setValue(cmp.email);
      this.updateform.get('clocation').setValue(cmp.clocation);
      this.updateform.get('ctype').setValue(cmp.ctype);
      this.updateform.get('cperson').setValue(cmp.cperson);
      this.updateform.get('mobile').setValue(cmp.mobile);
    }
  }

  back()
  {
    this.location.back();
  }
  updatecmpdata()
  {
    
  }
}

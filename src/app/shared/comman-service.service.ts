import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {
  url:string="http://localhost:3000/Employee";
  url1:string="http://localhost:3000/Company";
  constructor(public htpp:HttpClient) { }

  postdata(emp:Employee):Observable<Employee>
  {
    return this.htpp.post<Employee>(this.url,emp);
  }
  logics():Observable<Employee>
  {
    return this.htpp.get<Employee>(this.url);
  }
  deletebyid(id:number)
  {
    return this.htpp.delete(this.url+"/"+id);
  }
  getbyId(id:number):Observable<any>
  {
    return this.htpp.get(this.url+"/"+id);
  }
  updateEmp(empu:Employee):Observable<any>
  {
    return this.htpp.put(this.url+"/"+empu.id,empu);
  }
  
  getclist():Observable<Company>
  {
    return this.htpp.get<Company>(this.url1);
  }

  getCmpById(id:number):Observable<any>
  {
    return this.htpp.get(this.url1+"/"+id);
  }

  postcmpdata(cmp1:Company):Observable<Company>
  {
    return this.htpp.post<Company>(this.url1,cmp1);
  }
}

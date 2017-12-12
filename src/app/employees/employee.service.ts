import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Employee {
  constructor(
    public id: number, 
    public fname: string,
    public lastname: string,
    public email: string,
    public joiningDate: string,
  ) { }
}

const EMPLOYEES = [
  new Employee(11, 'June','Snow','js@ymail.com','2016-12-13'),
  new Employee(12, 'May','Day','md@gmail.com','2017-01-15'),
  new Employee(13, 'April','Peter','ap@mail.com','2017-02-13'),
  new Employee(14, 'Celeritas','Magnus','cm@mail.com','2017-03-13'),
  new Employee(15, 'Magneta','kidman','mk@ssdf.com','2017-04-13'),
  new Employee(16, 'Jake','walter','jw@ssdf.com','2017-05-13')
];

@Injectable()
export class EmployeeService {
  id:number=17;
  getEmployees() { return Observable.of(EMPLOYEES); }

  getEmployee(id: number | string) {
    return this.getEmployees()
      // (+) before `id` turns the string into a number
      .map(employees => employees.find(employee => employee.id === +id));
  }

   edit(id: number,editemployee:Employee){
     for(let employee of EMPLOYEES){
       if(id==employee.id){
         employee.fname=editemployee.fname;
         employee.lastname=editemployee.lastname;
         employee.email=editemployee.email;
         employee.joiningDate=editemployee.joiningDate;
         break;
       }
     }
   }
   
   add(addEmployee:Employee){
     addEmployee.id=this.id++;
      EMPLOYEES.push(addEmployee);

   }
}
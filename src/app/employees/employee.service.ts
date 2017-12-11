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
    // public selected: boolean
  ) { }
}

const EMPLOYEES = [
  new Employee(11, 'Mr. Nice','Horse','hj@ssdf.com','12/34/12'),
  new Employee(12, 'Narco','Horse2','hj@ssdf.com','12/34/12'),
  new Employee(13, 'Bombasto','Horse3','hj@ssdf.com','12/34/12'),
  new Employee(14, 'Celeritas','Horse4','hj@ssdf.com','12/34/12'),
  new Employee(15, 'Magneta','Horse5','hj@ssdf.com','12/34/12'),
  new Employee(16, 'RubberMan','Horse6','hj@ssdf.com','12/34/12')
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

  deleteEmployee(delemployee:Employee){
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
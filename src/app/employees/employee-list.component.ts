// // TODO SOMEDAY: Feature Componetized like CrisisCenter
// import 'rxjs/add/operator/switchMap';
// import { Observable } from 'rxjs/Observable';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';

// import { Employee, EmployeeService}  from './employee.service';
// import { ExcelService } from '../excel.service';
// import { Pipe, PipeTransform } from '@angular/core';



// @Component({
//   templateUrl: './employee-list.component.html', 
// })
// export class EmployeeListComponent implements OnInit {
//   //employees: Observable<Employee[]>;
//   employees: Employee[];
//   employeeoo: Employee[]=[];

//   private selectedId: number;
//   isDesc: boolean = false;
//   column: string = 'fname';
//   direction: number;
//   checked:boolean=false;

//   constructor(
//     private service: EmployeeService,
//     private route: ActivatedRoute,
//     private excelService: ExcelService
//   ) {
//     this.excelService = excelService;
//     //this.employeeoo=this.service.getEmployees()
//   }

//   ngOnInit() {
//     return this.service.getEmployees().subscribe((data)=>{console.log(data);this.employees=data})
//   }

//   deleteEmployee(employee:Employee){
//       var del=confirm("do you want to delete?");
//       if(del==true){
//         this.employees.forEach((value,index)=>{
//           if(value.id==employee.id){
//             if (index !== -1) {
//               console.log("splice delete");
//               this.employees.splice(index, 1);
//             }
//           }
//         });
//       }
//   }

//   toggleSelect(){
//     this.checked=!this.checked;
//     this.checked?this.employeeoo=this.employees:this.employeeoo=[];
//   }

//   select(value:boolean,employee:Employee){
//     alert(value);
//     alert(employee.id);
//     if(value==true) this.employeeoo.push(employee);
//     if(value==false){
//       this.employeeoo.forEach((value,index)=>{
//         if(value.id==employee.id){
//           if (index !== -1) {
//             console.log("splice employeeoo");
//             this.employeeoo.splice(index, 1);
//           }
//         }
//       });
//     }
//     this.employeeoo.forEach(function(her){
//       console.log(her.id);
//     })
//   }

//   exportSelected(event) {
//     this.employeeoo.length>0?this.excelService.exportAsExcelFile(this.employeeoo, 'employees'):alert("check atleast 1 employee");
//   }

//   sort(property){
//     this.isDesc = !this.isDesc; //change the direction    
//     this.column = property;
//     let direction = this.isDesc ? 1 : -1;

//     this.employees.sort(function(a, b){
//         if(a[property] < b[property]){
//             return -1 * direction;
//         }
//         else if( a[property] > b[property]){
//             return 1 * direction;
//         }
//         else{
//             return 0;
//         }
//     });
// };
    
// }

// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Employee, EmployeeService } from './employee.service';
import { ExcelService } from '../excel.service';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  //employees: Observable<Employee[]>;
  employees: Employee[];
  employeeoo: Employee[] = [];

  private selectedId: number;
  isDesc: boolean = false;
  column: string = 'fname';
  direction: number;
  checked: boolean = false;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private excelService: ExcelService
  ) {
    this.excelService = excelService;
    //this.employeeoo=this.service.getEmployeees()
  }

  ngOnInit() {
    return this.service.getEmployees().subscribe((data) => { console.log(data); this.employees = data })
  }

  deleteEmployee(employee: Employee) {
    var a = confirm("do you want to delete?");
    if (a == true) {
      this.employees.forEach((value, index) => {
        if (value.id == employee.id) {
          if (index !== -1) {
            console.log("splice delete");
            this.employees.splice(index, 1);
          }
        }
      });
    }
  }

  toggleSelectAll() {
    this.checked = !this.checked;
    console.log("Toggle select all", this.checked);
    if (this.checked) {
      this.employeeoo = this.employees;
    } else {
      this.employeeoo = [];
    }
    console.log("Selected users", this.employeeoo);
  }

  toggleSelect(isSelected: boolean, employee: Employee) {
    console.log("toggleSelect ", isSelected);
    console.log("toggleSelect ", employee.id);
    if (isSelected) {
      this.employeeoo.push(employee)
    } else {
      let index = this.employeeoo.indexOf(employee);
      this.employeeoo.splice(index, 1);
      console.log("Index to be spliced ", index);
    }
    console.log("Selected users", this.employeeoo);

  }
  exportSelected(event) {
    if (this.employeeoo.length > 0) {
      this.excelService.exportAsExcelFile(this.employeeoo, 'employees');
    }
    else {
      alert("check atleast 1 employee");
    }
  }
  // exportToExcel(event) {
  //   this.excelService.exportAsExcelFile(this.employees, 'employees');
  // }
  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.employees.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };

}
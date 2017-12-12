import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  transform(employees: any, searchText: any): any {
    if(searchText == null) return employees;
    
    return employees.filter(function(employee){
      return ((employee.fname.toLowerCase().indexOf(searchText.toLowerCase()) > -1)||
      (employee.lastname.toLowerCase().indexOf(searchText.toLowerCase()) > -1)||
      (employee.email.toLowerCase().indexOf(searchText.toLowerCase()) > -1));
    })
  }
}
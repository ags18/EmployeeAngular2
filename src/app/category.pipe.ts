import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  transform(employees: any, searchText: any): any {
    if(searchText == null) return employees;
    

    return employees.filter(function(employee){
      return employee.fname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      //.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
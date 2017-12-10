import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  transform(heroes: any, searchText: any): any {
    if(searchText == null) return heroes;
    alert("inside pipe");

    return heroes.filter(function(category){
      return category.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
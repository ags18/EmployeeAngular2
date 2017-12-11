import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
  transform(heroes: any, searchText: any): any {
    if(searchText == null) return heroes;
    

    return heroes.filter(function(hero){
      return hero.fname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      //.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Hero, HeroService}  from './hero.service';
import { ExcelService } from '../excel.service';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  templateUrl: './hero-list.component.html', 
})
export class HeroListComponent implements OnInit {
  //heroes: Observable<Hero[]>;
  heroes: Hero[];
  herooo: Hero[]=[];

  private selectedId: number;
  isDesc: boolean = false;
  column: string = 'fname';
  direction: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private excelService: ExcelService
  ) {
    this.excelService = excelService;
    //this.herooo=this.service.getHeroes()
  }

  ngOnInit() {
    // this.heroes$ = this.route.paramMap
    //   .switchMap((params: ParamMap) => {
       return this.service.getHeroes().subscribe((data)=>{console.log(data);this.heroes=data})
        //return this.service.getHeroes();
     // });
  }
  deleteHero(hero:Hero){
      var a=confirm("do you want to delete?");
      if(a==true){
      this.heroes.forEach((value,index)=>{
        if(value.id==hero.id){
          if (index !== -1) {
                  this.heroes.splice(index, 1);
              }
        }
      });}
  }
  Selected(hero:Hero){
    this.herooo.push(hero);
    alert(hero.id);
    alert(this.herooo);
    
  }
  exportSelected(event) {
    this.excelService.exportAsExcelFile(this.herooo, 'heroes');
  }
  exportToExcel(event) {
    this.excelService.exportAsExcelFile(this.heroes, 'heroes');
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.heroes.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
};
    
}
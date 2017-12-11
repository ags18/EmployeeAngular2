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
  checked:boolean=false;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private excelService: ExcelService
  ) {
    this.excelService = excelService;
    //this.herooo=this.service.getHeroes()
  }

  ngOnInit() {
    return this.service.getHeroes().subscribe((data)=>{console.log(data);this.heroes=data})
  }

  deleteHero(hero:Hero){
      var a=confirm("do you want to delete?");
      if(a==true){
        this.heroes.forEach((value,index)=>{
          if(value.id==hero.id){
            if (index !== -1) {
              console.log("splice delete");
              this.heroes.splice(index, 1);
            }
          }
        });
      }
  }

  selectAll(){
    this.checked=true;
    this.herooo=this.heroes;
  }

  deselectAll(){
    this.herooo=[];
    this.checked=false;
  }

  select(value:boolean,hero:Hero){
    alert(value);
    alert(hero.id);
    if(value==true) this.herooo.push(hero);
    if(value==false){
      this.herooo.forEach((value,index)=>{
        if(value.id==hero.id){
          if (index !== -1) {
            console.log("splice herooo");
            this.herooo.splice(index, 1);
          }
        }
      });
    }
    alert(this.herooo);
    
  }
  exportSelected(event) {
    if(this.herooo.length>0){
      this.excelService.exportAsExcelFile(this.herooo, 'heroes');
    }
    else{
      alert("check atleast 1 employee");
    }
  }
  // exportToExcel(event) {
  //   this.excelService.exportAsExcelFile(this.heroes, 'heroes');
  // }
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
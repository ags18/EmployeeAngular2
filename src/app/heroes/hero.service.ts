import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Hero {
  constructor(
    public id: number, 
    public fname: string,
    public lastname: string,
    public email: string,
    public joiningDate: string,
    //public selected: boolean
  ) { }
}

const HEROES = [
  new Hero(11, 'Mr. Nice','Horse','hj@ssdf.com','12/34/12'),
  new Hero(12, 'Narco','Horse2','hj@ssdf.com','12/34/12'),
  new Hero(13, 'Bombasto','Horse3','hj@ssdf.com','12/34/12'),
  new Hero(14, 'Celeritas','Horse4','hj@ssdf.com','12/34/12'),
  new Hero(15, 'Magneta','Horse5','hj@ssdf.com','12/34/12'),
  new Hero(16, 'RubberMan','Horse6','hj@ssdf.com','12/34/12')
];

@Injectable()
export class HeroService {
  getHeroes() { return Observable.of(HEROES); }

  getHero(id: number | string) {
    return this.getHeroes()
      // (+) before `id` turns the string into a number
      .map(heroes => heroes.find(hero => hero.id === +id));
  }

  deleteHero(delhero:Hero){
   }
}
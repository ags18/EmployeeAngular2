import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HeroService } from './hero.service';

import { HeroRoutingModule } from './heroes-routing.module';
import { CategoryPipe } from '../category.pipe';
import { OrderrByPipe } from '../order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    CategoryPipe,
    OrderrByPipe
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule }     from './heroes/heroes.module';

import { CrisisListComponent }   from './crisis-list.component';
//import { HeroListComponent }     from './hero-list.component';
import { PageNotFoundComponent }     from './page-not-found.component';
import { CategoryPipe } from './category.pipe';
import { ExcelService } from './excel.service';

@NgModule({
  declarations: [
    AppComponent,
    //HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    //CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesModule,
    AppRoutingModule,
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

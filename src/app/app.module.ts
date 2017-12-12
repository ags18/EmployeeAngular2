import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesModule }     from './employees/employees.module';

import { AboutUsComponent }   from './about-us.component';
import { PageNotFoundComponent }     from './page-not-found.component';
import { ExcelService } from './excel.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
//    FormsModule,
//    ReactiveFormsModule,
    EmployeesModule,    //this is should be added in proper order since the routes should be in correct order
    AppRoutingModule,   //this should come at last since it has wildcard route
  ],
  providers: [ExcelService],  //global service to be used by any module
  bootstrap: [AppComponent]
})
export class AppModule { }

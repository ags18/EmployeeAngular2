import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { EmployeeListComponent }    from './employee-list.component';
import { EmployeeDetailComponent }  from './employee-detail.component';

import { EmployeeService } from './employee.service';

import { EmployeeRoutingModule } from './employees-routing.module';
import { CategoryPipe } from '../category.pipe';

@NgModule({
  imports: [                  //Modules that ur importing
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [             //the components ur using should go here
    EmployeeListComponent,
    EmployeeDetailComponent,
    CategoryPipe,
  ],
  providers: [ EmployeeService ] //The Services ur using should go here
})
export class EmployeesModule {}
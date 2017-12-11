import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { EmployeeListComponent }    from './employee-list.component';
import { EmployeeDetailComponent }  from './employee-detail.component';

import { EmployeeService } from './employee.service';

import { EmployeeRoutingModule } from './employees-routing.module';
import { CategoryPipe } from '../category.pipe';
import { OrderrByPipe } from '../order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    CategoryPipe,
    OrderrByPipe
  ],
  providers: [ EmployeeService ]
})
export class EmployeesModule {}
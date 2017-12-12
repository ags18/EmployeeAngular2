import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Employee, EmployeeService }  from './employee.service';
import { Validators, FormBuilder,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit {
  employee$: Observable<Employee>;
  employeeForm: FormGroup; // <--- employeeForm is of type FormGroup
  employeeNewForm: FormGroup;
  id;
  newEmployee=false;
  employee: Employee;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmployeeService,
    private fb: FormBuilder
  ) {  }

  createForm() {
    //alert("create form");
    this.employeeForm = this.fb.group({
      fname: new FormControl('',Validators.required ),
      lastname: new FormControl('',Validators.required ),
      email: new FormControl('', [Validators.required,Validators.email]),
      joiningDate: new FormControl('',Validators.required ),
    });
  }
  createEditForm() {
    //alert("createEdit form");
    this.employeeForm = this.fb.group({
      fname: new FormControl(this.employee.fname,Validators.required ),
      lastname: new FormControl(this.employee.lastname,Validators.required ),
      email: new FormControl(this.employee.email, [Validators.required,Validators.email]),
      joiningDate: new FormControl(this.employee.joiningDate,Validators.required ),
    });
  }
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.newEmployee=false;
    if(this.id != null){
      this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getEmployee(params.get('id'))).subscribe((data)=>{this.employee=data;console.log("dattttssssssssssssss"+this.employee.fname);});
    }
    else{
      this.newEmployee=true;
    }
    if(this.newEmployee==true){this.createForm();}
    else{this.createEditForm()};
  }

  gotoEmployees() {
    let employee:Employee=new Employee(this.id,this.employeeForm.controls.fname.value,
      this.employeeForm.controls.lastname.value,
      this.employeeForm.controls.email.value,
      this.employeeForm.controls.joiningDate.value
    )
    if(this.id){
      this.service.edit(this.id,employee);
    }else{
      this.service.add(employee);
    }
    this.router.navigate(['/employees']);
  }
}
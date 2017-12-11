import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//import { slideInDownAnimation } from '../animations';

import { Hero, HeroService }  from './hero.service';
import { Validators, FormBuilder,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  heroNewForm: FormGroup;
  id;
  newHero=false;
  hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
    private fb: FormBuilder
  ) {  }

  createForm() {
    alert("create form");
    this.heroForm = this.fb.group({
      fname: new FormControl('',Validators.required ),
      lastname: new FormControl('',Validators.required ),
      email: new FormControl('', [Validators.required,Validators.email]),
      joiningDate: new FormControl('',Validators.required ),
    });
  }
  createEditForm() {
    alert("createEdit form");
    this.heroForm = this.fb.group({
      fname: new FormControl(this.hero.fname,Validators.required ),
      lastname: new FormControl(this.hero.lastname,Validators.required ),
      email: new FormControl(this.hero.email, [Validators.required,Validators.email]),
      joiningDate: new FormControl(this.hero.joiningDate,Validators.required ),
    });
  }
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.newHero=false;
    //alert(this.id);
    if(this.id != null){
      this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id'))).subscribe((data)=>{this.hero=data;console.log("dattttssssssssssssss"+this.hero.fname);});
    }
    else{
      this.newHero=true;
    }
    //console.log("asdfasdfasasdf: "+this.newHero);
    if(this.newHero==true){this.createForm();}
    else{this.createEditForm()};
  }

  gotoHeroes() {
    let hero:Hero=new Hero(this.id,this.heroForm.controls.fname.value,
      this.heroForm.controls.lastname.value,
      this.heroForm.controls.email.value,
      this.heroForm.controls.joiningDate.value
    )
    if(this.id){
      this.service.edit(this.id,hero);
    }else{
      this.service.add(hero);
    }
    this.router.navigate(['/heroes']);
  }
}
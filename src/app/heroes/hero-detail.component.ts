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
  // heroForm = new FormGroup ({
  //   fname: new FormControl(),
  // });
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      fname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', [Validators.required,Validators.email]],
      joiningDate: ['', Validators.required ],
    });
  }
  ngOnInit() {
    this.hero$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')));
  }

  gotoHeroes(hero: Hero) {
    this.router.navigate(['/heroes']);
  }
}
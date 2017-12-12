import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent }   from './about-us.component';
import { PageNotFoundComponent }   from './page-not-found.component';

const appRoutes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
  { path: '', redirectTo:'aboutUs', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[
      RouterModule,
  ]
})
export class AppRoutingModule { }

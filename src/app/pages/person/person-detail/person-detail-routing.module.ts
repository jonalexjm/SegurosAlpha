import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './person-detail.component';


const routes: Routes = [
    {
      path: '',
      component: PersonDetailComponent
    },
    {
      path: 'personadetail/:id',
      component: PersonDetailComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class PersonDetailRoutingModule { }
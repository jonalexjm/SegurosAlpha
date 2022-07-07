import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'person', loadChildren: () => import('./pages/person/person-list/person-list-routing.module').then(m => m.PersonListRoutingModule)},
    { path: 'personDetail', loadChildren: () => import('./pages/person/person-detail/person-detail-routing.module').then(m => m.PersonDetailRoutingModule)},
    {
      path: '**',
      redirectTo: 'person'
    }
  ]


@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
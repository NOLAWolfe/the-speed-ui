import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {
        path: '',
        children: [
          { path: 'home', component: UserHomeComponent },
          { path: 'profile', component: ProfileComponent },
          { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }

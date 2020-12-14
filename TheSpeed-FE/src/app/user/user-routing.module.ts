import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { EventComponent } from './event/event.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {
        path: '',
        children: [
          { path: 'home', component: UserHomeComponent },
          {
            path: 'user-profile', component: UserProfileComponent,
            children: [

            ]
          },
          { path: 'user-create', component: UserCreateComponent},
          { path: 'user-settings', component: UserSettingsComponent },
          { path: 'event', component: EventComponent },
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

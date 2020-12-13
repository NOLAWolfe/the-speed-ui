import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';
import { EventComponent } from './event/event.component';
import { UserCreateComponent } from './user-create/user-create.component'; 
import { ProfileGeneralComponent } from '../Profile/profile-general/profile-general.component';



@NgModule({
  declarations: [
    UserHomeComponent,
    UserNavComponent,
    ProfileComponent,
    UserComponent,
    EventComponent,
    UserCreateComponent,
    ProfileGeneralComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularMaterialsModule


  ],
  exports: [
    UserNavComponent
  ],
})
export class UserModule { }

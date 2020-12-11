import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';



@NgModule({
  declarations: [
    UserHomeComponent,
    UserNavComponent,
    ProfileComponent,
    UserComponent,
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

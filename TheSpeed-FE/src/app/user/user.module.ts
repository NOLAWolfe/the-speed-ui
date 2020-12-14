import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserComponent } from './user.component';
import { AngularMaterialsModule } from '../shared/angular-materials/angular-materials.module';
import { EventComponent } from './event/event.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ProfileGeneralComponent } from '../profile/profile-general/profile-general.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserUpdatesComponent } from './user-updates/user-updates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    UserHomeComponent,
    UserNavComponent,
    UserProfileComponent,
    UserComponent,
    EventComponent,
    UserCreateComponent,
    ProfileGeneralComponent,
    UserSettingsComponent,
    UserUpdatesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularMaterialsModule,
    FormsModule,
    // NgbModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserNavComponent
  ],
})
export class UserModule { }

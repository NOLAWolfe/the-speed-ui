import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './shared/angular-materials/angular-materials.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './shared/service/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/service/auth.service';
import { InfinitescrollProfileComponent } from './Profile/infinitescroll-profile/infinitescroll-profile.component';
import { PostServiceService } from './shared/post-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    InfinitescrollProfileComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthService, PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

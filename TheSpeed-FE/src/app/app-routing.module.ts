import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { RegisterComponent } from './core/register/register.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'landing', component: LandingComponent,
    children: [
      {path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent},
    ],
  },
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

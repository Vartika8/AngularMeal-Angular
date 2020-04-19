import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { WelcomecustomerComponent} from './welcomecustomer/welcomecustomer.component'
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustomerupdateComponent} from './customerupdate/customerupdate.component';
import {TestComponent} from './test/test.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';
import { ViewfoodproductComponent } from './viewfoodproduct/viewfoodproduct.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent},
  {path: 'welcomecustomer',component: WelcomecustomerComponent},
  {path: 'customerprofile',component:CustomerprofileComponent},
  {path: 'customerupdate',component:CustomerupdateComponent},
  {path: 'test',component:TestComponent},
  {path: 'restaurantprofile',component:RestaurantprofileComponent},
  {path: 'viewfoodproduct',component:ViewfoodproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

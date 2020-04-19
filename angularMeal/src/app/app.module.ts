import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomecustomerComponent } from './welcomecustomer/welcomecustomer.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { TestComponent } from './test/test.component';
import { RestnavComponent } from './restnav/restnav.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';
import { ViewfoodproductComponent } from './viewfoodproduct/viewfoodproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent,
    FooterComponent,
    WelcomecustomerComponent,
    CustomerprofileComponent,
    CustomerupdateComponent,
    TestComponent,
    RestnavComponent,
    RestaurantprofileComponent,
    ViewfoodproductComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

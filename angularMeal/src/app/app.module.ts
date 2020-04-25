import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
<<<<<<< HEAD
=======
import { CartComponent } from './cart/cart.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { WelcomecustomerComponent } from './welcomecustomer/welcomecustomer.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';
import { TestComponent } from './test/test.component';
import { RestnavComponent } from './restnav/restnav.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';
import { ViewfoodproductComponent } from './viewfoodproduct/viewfoodproduct.component';
import { UpdatefoodComponent } from './updatefood/updatefood.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { MenulistComponent } from './menulist/menulist.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { VieworderComponent } from './vieworder/vieworder.component';
=======
import { MenuComponent } from './menu/menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RestaurantadminComponent } from './restaurantadmin/restaurantadmin.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { UpdatefoodComponent } from './updatefood/updatefood.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { UpdaterestaurantComponent } from './updaterestaurant/updaterestaurant.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { UpdateRestaurantProfileComponent } from './update-restaurant-profile/update-restaurant-profile.component';
import { RestnavComponent } from './restnav/restnav.component';
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
<<<<<<< HEAD
=======
    CartComponent,
    RestaurantComponent,
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e
    HomeComponent,
    RegisterComponent,
    NavComponent,
    FooterComponent,
<<<<<<< HEAD
    WelcomecustomerComponent,
    CustomerprofileComponent,
    CustomerupdateComponent,
    TestComponent,
    RestnavComponent,
    RestaurantprofileComponent,
    ViewfoodproductComponent,
    UpdatefoodComponent,
    AddfoodComponent,
    MenulistComponent,
    CartComponent,
    OrderComponent,
    VieworderComponent,
=======
    MenuComponent,
    UserDetailsComponent,
    UpdateUserProfileComponent,
    ThankyouComponent,
    RestaurantadminComponent,
    AddfoodComponent,
    UpdatefoodComponent,
    DeletefoodComponent,
    AddcustomerComponent,
    AddrestaurantComponent,
    UpdaterestaurantComponent,
    UpdatecustomerComponent,
    RestaurantprofileComponent,
    FooddetailsComponent,
    UpdateRestaurantProfileComponent,
    RestnavComponent,
>>>>>>> e8a2e3a96229d81edbb0fa8a496db9e2c4db555e

    
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

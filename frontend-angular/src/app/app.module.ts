import { NgModule } from '@angular/core';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FoodItemsComponent } from './food-item/food-items.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OffersComponent } from './offers/offers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeFoodComponent } from './employee-food/employee-food.component';
import { EmployeeUpdateFormComponent } from './employee-update-form/employee-update-form.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { EmployeeDrinksComponent } from './employee-drinks/employee-drinks.component';
import { EmployeeOffersComponent } from './employee-offers/employee-offers.component';
import { EmployeeReviewsComponent } from './employee-reviews/employee-reviews.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EmployeeUpdateReviewComponent } from './employee-update-review/employee-update-review.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeeContactUsComponent } from './employee-contact-us/employee-contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeeAboutUsComponent } from './employee-about-us/employee-about-us.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { EmployeeContactUsFormComponent } from './employee-contact-us-form/employee-contact-us-form.component';
import { EmployeeContactInfoComponent } from './employee-contact-info/employee-contact-info.component';
import {AuthguardService} from "./services/authguard.service";
import { EmployeeAboutUsFormComponent } from './employee-about-us-form/employee-about-us-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodItemsComponent,
    DrinksComponent,
    ReviewFormComponent,
    ItemFormComponent,
    HomePageComponent,
    OffersComponent,
    NavbarComponent,
    EmployeeFoodComponent,
    EmployeeUpdateFormComponent,
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    EmployeeHomepageComponent,
    EmployeeNavbarComponent,
    EmployeeDrinksComponent,
    EmployeeOffersComponent,
    EmployeeReviewsComponent,
    ReviewsComponent,
    EmployeeUpdateReviewComponent,
    ContactUsComponent,
    EmployeeContactUsComponent,
    AboutUsComponent,
    EmployeeAboutUsComponent,
    ContactUsFormComponent,
    EmployeeContactUsFormComponent,
    EmployeeContactInfoComponent,
    EmployeeAboutUsFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

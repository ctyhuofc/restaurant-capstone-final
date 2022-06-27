import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodComponent} from "./food/food.component";
import {DrinksComponent} from "./drinks/drinks.component";
import {ReviewFormComponent} from "./review-form/review-form.component";
import {ItemFormComponent} from "./item-form/item-form.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {OffersComponent} from "./offers/offers.component";
import {EmployeeFoodComponent} from "./employee-food/employee-food.component";
import {EmployeeUpdateFormComponent} from "./employee-update-form/employee-update-form.component";
import {EmployeeLoginComponent} from "./employee-login/employee-login.component";
import {EmployeeRegisterComponent} from "./employee-register/employee-register.component";
import {AuthguardService} from "./services/authguard.service";
import {EmployeeHomepageComponent} from "./employee-homepage/employee-homepage.component";
import {EmployeeDrinksComponent} from "./employee-drinks/employee-drinks.component";
import {EmployeeNavbarComponent} from "./employee-navbar/employee-navbar.component";
import {EmployeeOffersComponent} from "./employee-offers/employee-offers.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {EmployeeReviewsComponent} from "./employee-reviews/employee-reviews.component";
import {EmployeeUpdateReviewComponent} from "./employee-update-review/employee-update-review.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ContactUsFormComponent} from "./contact-us-form/contact-us-form.component";
import {EmployeeContactUsFormComponent} from "./employee-contact-us-form/employee-contact-us-form.component";
import {EmployeeContactUsComponent} from "./employee-contact-us/employee-contact-us.component";
import {EmployeeContactInfoComponent} from "./employee-contact-info/employee-contact-info.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {EmployeeAboutUsComponent} from "./employee-about-us/employee-about-us.component";
import {EmployeeAboutUsFormComponent} from "./employee-about-us-form/employee-about-us-form.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'employees/updateitem/:id', component: EmployeeUpdateFormComponent, canActivate: [AuthguardService]},
  {path: 'employees/updatereview/:id', component: EmployeeUpdateReviewComponent, canActivate: [AuthguardService]},
  {path: 'employees/updatecontact/:id', component: EmployeeContactUsFormComponent, canActivate: [AuthguardService]},
  {path: 'employees/updateabout-us/:id', component: EmployeeAboutUsFormComponent, canActivate: [AuthguardService]},
  {path: 'employees/item-form', component: ItemFormComponent,canActivate: [AuthguardService]},
  {path: 'employees/food', component: EmployeeFoodComponent, canActivate: [AuthguardService]},
  {path: 'employees/register', component: EmployeeRegisterComponent, canActivate: [AuthguardService]},
  {path: 'employees/home', component: EmployeeHomepageComponent, canActivate: [AuthguardService]},
  {path: 'employees/drinks', component: EmployeeDrinksComponent, canActivate: [AuthguardService]},
  {path: 'employees/navbar', component: EmployeeNavbarComponent, canActivate: [AuthguardService]},
  {path: 'employees/offers', component: EmployeeOffersComponent, canActivate: [AuthguardService]},
  {path: 'employees/reviews', component: EmployeeReviewsComponent, canActivate: [AuthguardService]},
  {path: 'employees/feedback', component: EmployeeContactUsComponent, canActivate: [AuthguardService]},
  {path: 'employees/contact-info', component: EmployeeContactInfoComponent, canActivate: [AuthguardService]},
  {path: 'employees/about-us', component: EmployeeAboutUsComponent, canActivate: [AuthguardService]},
  {path: 'employees-only/login', component: EmployeeLoginComponent},
  {path: 'food', component: FoodComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'review', component: ReviewFormComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'contact-us-form', component: ContactUsFormComponent},
  {path: 'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

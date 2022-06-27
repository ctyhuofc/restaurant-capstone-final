import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewFormPageRoutingModule } from './review-form-routing.module';

import { ReviewFormPage } from './review-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReviewFormPage]
})
export class ReviewFormPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewFormPage } from './review-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewFormPageRoutingModule {}

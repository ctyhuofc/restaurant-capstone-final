import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab5Page } from './tab5.page';
import {ReviewsPage} from "../reviews/reviews.page";

const routes: Routes = [
  {path: '', component: Tab5Page},
  {path: 'reviews', component: ReviewsPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule {}

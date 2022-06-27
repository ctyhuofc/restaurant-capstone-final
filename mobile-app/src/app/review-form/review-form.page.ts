import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.page.html',
  styleUrls: ['./review-form.page.scss'],
})
export class ReviewFormPage implements OnInit {
  addReviewForm;

  constructor(private formBuilder:FormBuilder, private dataService:DataService){
    this.addReviewForm = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      item: ['', [Validators.required]],
      review: ['', [Validators.required]],
      rating: ['', [Validators.required]],

    })
  }
  ngOnInit() {
  }
  get name(){
    return this.addReviewForm.get('name')!;
  }
  get email(){
    return this.addReviewForm.get('email')!;
  }
  get item(){
    return this.addReviewForm.get('item')!;
  }
  get review(){
    return this.addReviewForm.get('review')!;
  }
  get rating(){
    return this.addReviewForm.get('rating')!;
  }


  add_review(){
    console.log(this.addReviewForm.value)
    this.dataService.createReview(this.addReviewForm.value).subscribe(()=> {
      alert('Review was created')
      this.addReviewForm.reset()
    })
  }
}



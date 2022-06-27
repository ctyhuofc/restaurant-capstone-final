import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {DataService} from "../services/data.service";
import {Item} from "../interfaces/item";
import {Review} from "../interfaces/review";



@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  selected: string = ''
  items!: Item[];
  addReviewForm;
  alert: boolean=false
  constructor(private formBuilder:FormBuilder, private dataService:DataService){
    this.addReviewForm = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      item: ['', [Validators.required]],
      review: ['', [Validators.required]],
      rating: ['', [Validators.required]],

    })
    dataService.getItems().subscribe((results) => {
      this.items = results;
    }, (err)=> {
      console.log(err);
    });
  }

  ngOnInit(): void {
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
      this.alert=true
      this.addReviewForm.reset()
    })
  }
closeAlert(){
    this.alert=false

}
}

import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from "../services/data.service";
import {Item} from "../interfaces/item";
import {Review} from "../interfaces/review"
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-update-review',
  templateUrl: './employee-update-review.component.html',
  styleUrls: ['./employee-update-review.component.css']
})
export class EmployeeUpdateReviewComponent implements OnInit {
  items!: Item[];
  reviews!: Review[];
  updateReviewForm;

  constructor(private formBuilder:FormBuilder, private dataService:DataService, private activatedRoute: ActivatedRoute){
    this.updateReviewForm = formBuilder.group({
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
    console.log(this.activatedRoute.snapshot.params?.['id'])
    this.dataService.getReviewById(this.activatedRoute.snapshot.params?.['id']).subscribe((result: any) => {
      console.log(result)
      this.updateReviewForm = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        item: new FormControl(result['item']),
        review: new FormControl(result['review']),
        rating: new FormControl(result['rating']),
      })
    })
  }
  get name(){
    return this.updateReviewForm.get('name')!;
  }
  get email(){
    return this.updateReviewForm.get('email')!;
  }
  get item(){
    return this.updateReviewForm.get('item')!;
  }
  get review(){
    return this.updateReviewForm.get('review')!;
  }
  get rating(){
    return this.updateReviewForm.get('rating')!;
  }
  updateReview() {
    let formData = this.updateReviewForm.value;
    let f = new FormData();

    //Transfer of all formgroup data into the FromData object

    for (let x in formData) {
      f.append(x, formData[x])
    }

    console.log(this.updateReviewForm.value)
    this.dataService.update_review(this.activatedRoute.snapshot.params?.['id'], f).subscribe( (results) => {
      alert('Review has been updated')
      this.updateReviewForm.reset()
    }, (err) => {
      alert('Review Item Failed');
      console.log(err)
    })
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.updateReviewForm.patchValue({
      photo_file: file
    })
  }
  loadData() {
    this.updateReviewForm.setValue({})
  }


}

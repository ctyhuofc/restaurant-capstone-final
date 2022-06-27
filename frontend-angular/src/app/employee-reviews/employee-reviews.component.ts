import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../interfaces/review";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-reviews',
  templateUrl: './employee-reviews.component.html',
  styleUrls: ['./employee-reviews.component.css']
})
export class EmployeeReviewsComponent implements OnInit {

  @Input()review!:Review
  reviews!: Review[];
  constructor(private dataService:DataService, private router:Router) {
    dataService.getReviews().subscribe((results) => {
      this.reviews = results;
    }, (err)=> {
      console.log(err);
    });
  }
  ngOnInit(): void {
  }
  delete_review(id:any) {
    console.log()
    this.dataService.delete_review(id).subscribe(() => {
      alert('Review has been deleted')
      window.location.reload();
    })
  }

  update_review(id:number){
    this.router.navigate(['/updatereview', id])
  }
}

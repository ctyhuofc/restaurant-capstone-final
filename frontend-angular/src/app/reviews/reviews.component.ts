import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../interfaces/review";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() review!: Review
  reviews!: Review[];

  constructor(private dataService: DataService) {
    dataService.getReviews().subscribe((results) => {
      this.reviews = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }
}

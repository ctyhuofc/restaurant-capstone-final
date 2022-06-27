import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../interfaces/item";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  @Input()item!:Item
  items!: Item[];
  constructor(private dataService:DataService) {
    dataService.getItems().subscribe((results) => {
      this.items = results;
    }, (err)=> {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}

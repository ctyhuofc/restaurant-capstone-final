import { Component, Input, OnInit } from '@angular/core';
import { Item } from "../interfaces/item";

@Component({
  selector: 'app-food-item',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
@Input()item!:Item
  constructor() { }

  ngOnInit(): void {
  }

}

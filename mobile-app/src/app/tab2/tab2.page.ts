import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../interfaces/item";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @Input()item!:Item
  items!: Item[];
  constructor(private dataService:DataService) {
    dataService.getItems().subscribe((results) => {
      this.items = results;
    }, (err)=> {
      console.log(err);
    });
  }

}

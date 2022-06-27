import {Component, Input} from '@angular/core';
import {Item} from "../interfaces/item";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
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

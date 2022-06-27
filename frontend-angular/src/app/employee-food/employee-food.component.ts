import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../interfaces/item";
import {DataService} from "../services/data.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-employee-food',
  templateUrl: './employee-food.component.html',
  styleUrls: ['./employee-food.component.css']
})
export class EmployeeFoodComponent implements OnInit {
  @Input()item!:Item
  items!: Item[];
  constructor(private dataService:DataService, private router:Router) {
    dataService.getItems().subscribe((results) => {
      this.items = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  delete_item(id:any) {
    console.log()
    this.dataService.deleteItem(id).subscribe(() => {
      alert('Item has been deleted')
      window.location.reload();
    })
  }

  updateItem(id:number){
    this.router.navigate(['/update', id])
  }
}




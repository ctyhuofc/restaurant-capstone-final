import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../interfaces/item";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-offers',
  templateUrl: './employee-offers.component.html',
  styleUrls: ['./employee-offers.component.css']
})
export class EmployeeOffersComponent implements OnInit {
  @Input()item!:Item
  items!: Item[];
  constructor(private dataService: DataService, private router:Router) {
    dataService.getItems().subscribe((results) => {
      this.items = results;
    }, (err)=> {
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
    this.router.navigate(['/updateitem', id])
  }

}

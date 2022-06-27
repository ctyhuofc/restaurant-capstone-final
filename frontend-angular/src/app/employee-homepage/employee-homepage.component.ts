import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-homepage',
  templateUrl: './employee-homepage.component.html',
  styleUrls: ['./employee-homepage.component.css']
})
export class EmployeeHomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
logout(){
    localStorage.removeItem("currentEmployee");
    alert('You are Now Logged Out')
    this.router.navigate([''])

}
}

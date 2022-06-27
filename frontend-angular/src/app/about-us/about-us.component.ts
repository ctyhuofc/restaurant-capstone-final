import { Component, OnInit, Input } from '@angular/core';
import {AboutUs} from "../interfaces/about-us";
import {DataService} from "../services/data.service";
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
@Input()aboutUs!:AboutUs
  about_us!:AboutUs[]
  constructor(private dataService:DataService) {
  dataService.getAboutUs().subscribe((results)=>{
    this.about_us = results;
  }, (err)=>{
    console.log(err);
  })
  }

  ngOnInit(): void {
  }

}

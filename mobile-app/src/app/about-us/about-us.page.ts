import { Component, OnInit, Input } from '@angular/core';
import {AboutUs} from "../interfaces/about-us";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
@Input()aboutus:AboutUs;
  about_us:AboutUs[];
  constructor(private dataService:DataService) {
    dataService.getAboutUs().subscribe((results)=>{
      this.about_us = results;
    }, (err)=>{
      console.log(err)
    })
  }

  ngOnInit() {
  }

}

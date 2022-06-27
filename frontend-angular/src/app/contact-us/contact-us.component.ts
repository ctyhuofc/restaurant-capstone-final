import { Component, Input, OnInit } from '@angular/core';
import {Contact} from "../interfaces/contact";
import {DataService} from "../services/data.service";
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @Input()contact_info!:Contact
  contact_infos!:Contact[]
  constructor(private dataService: DataService) {
    dataService.getContactInfo().subscribe((results)=>{
      this.contact_infos = results;
    }, (err)=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}

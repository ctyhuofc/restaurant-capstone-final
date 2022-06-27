import {Component, Input, OnInit} from '@angular/core';
import {ContactForm} from "../interfaces/contact-form";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-employee-contact-us',
  templateUrl: './employee-contact-us.component.html',
  styleUrls: ['./employee-contact-us.component.css']
})
export class EmployeeContactUsComponent implements OnInit {
  @Input()contactForm!:ContactForm
  contactForms!:ContactForm[]
  constructor(private dataService:DataService) {
    dataService.getFeedback().subscribe((results)=>{
      this.contactForms = results;
    }, (err)=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

}

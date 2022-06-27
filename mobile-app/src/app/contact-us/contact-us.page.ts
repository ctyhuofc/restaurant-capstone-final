import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {DataService} from "../services/data.service";


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
addFeedbackForm
  constructor(private formBuilder: FormBuilder, private dataService:DataService){
  this.addFeedbackForm = formBuilder.group({
    full_name: ['',[Validators.required]],
    email: ['', [Validators.required]],
    comment: ['', [Validators.required]],
  })
  }

  ngOnInit() {
  }
get full_name(){
  return this.addFeedbackForm.get('full_name')
}
get email(){
  return this.addFeedbackForm.get('email')
}get comment(){
  return this.addFeedbackForm.get('comment')
}

addFeedback(){
  console.log(this.addFeedbackForm.value)
  this.dataService.createFeedback(this.addFeedbackForm.value).subscribe(()=>{
  alert('Comment Was Submitted')
  this.addFeedbackForm.reset()
  })
}
}

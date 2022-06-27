import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
addContactForm;
alert: boolean=false
  constructor(private formBuilder:FormBuilder, private dataService:DataService) {
  this.addContactForm = formBuilder.group({
    full_name:['', [Validators.required]],
    email:['', [Validators.required]],
    comment:['', [Validators.required]],
  })
  }

  ngOnInit(): void {
  }
get full_name(){
    return this.addContactForm.get('full_name')!;
}
get email(){
    return this.addContactForm.get('email')!;
}
get comment(){
    return this.addContactForm.get('comment')!;
}
add_contact(){
    this.dataService.createContact(this.addContactForm.value).subscribe(()=>{
      this.alert=true
      this.addContactForm.reset()
    })
}
  closeAlert(){
    this.alert=false

  }
}

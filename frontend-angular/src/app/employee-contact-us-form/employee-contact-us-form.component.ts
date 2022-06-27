import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from "../services/data.service";
import {Contact} from "../interfaces/contact";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-employee-contact-us-form',
  templateUrl: './employee-contact-us-form.component.html',
  styleUrls: ['./employee-contact-us-form.component.css']
})
export class EmployeeContactUsFormComponent implements OnInit {
  contacts!: Contact[]
  updateContactInfo;

  constructor(private formBuilder:FormBuilder, private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.updateContactInfo = formBuilder.group({
      address: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      email: ['', [Validators.required]],
      hours: ['', [Validators.required]]
    })
    // dataService.getContactInfo().subscribe((results)=>{
    //   this.contacts = results;
    // }, (err)=>{
    //   console.log(err);
    // });
  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params?.['id'])
    this.dataService.getContactInfoById(this.activatedRoute.snapshot.params?.['id']).subscribe((result: any) => {
      console.log(result)
      this.updateContactInfo = new FormGroup({
        address: new FormControl(result['address']),
        phone_number: new FormControl(result['phone_number']),
        email: new FormControl(result['email']),
        hours: new FormControl(result['hours'])
      })
    })
  }

get address(){
    return this.updateContactInfo.get('address')!;
}
get phone_number(){
    return this.updateContactInfo.get('phone_number')!;
}

get email(){
    return this.updateContactInfo.get('email')
}

  get hours(){
    return this.updateContactInfo.get('hours')
  }
updateContact(){
    let formData = this.updateContactInfo.value;
    let f = new FormData();

    for (let x in formData){
      f.append(x, formData[x])
    }

  console.log(this.updateContactInfo.value)
  this.dataService.updateContactInfo(this.activatedRoute.snapshot.params?.['id'], f).subscribe( (results) => {
    alert('Contact Info has been updated')
    this.updateContactInfo.reset()
  }, (err) => {
    alert('Update Item Failed');
    console.log(err)
  })
}
  loadData() {
    this.updateContactInfo.setValue({})
  }
}

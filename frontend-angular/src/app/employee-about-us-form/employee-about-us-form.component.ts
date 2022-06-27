import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from "../services/data.service";
import {AboutUs} from "../interfaces/about-us";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-about-us-form',
  templateUrl: './employee-about-us-form.component.html',
  styleUrls: ['./employee-about-us-form.component.css']
})
export class EmployeeAboutUsFormComponent implements OnInit {
  aboutuss!: AboutUs[]
  updateAboutUs

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.updateAboutUs = formBuilder.group({
      our_history: ['', [Validators.required]],
      what_we_believe: ['', [Validators.required]],
      our_commit: ['', [Validators.required]],
      photo_file: ['', [Validators.required]],
    })

  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params?.['id'])
    this.dataService.getAboutUsInfoById(this.activatedRoute.snapshot.params?.['id']).subscribe((result: any) => {
      console.log(result)
      this.updateAboutUs = new FormGroup({
        our_history: new FormControl(result['our_history']),
        what_we_believe: new FormControl(result['what_we_believe']),
        our_commit: new FormControl(result['our_commit'])
      })
    })
  }

  get our_history(){
    return this.updateAboutUs.get('our_history')!;
  }
  get what_we_believe(){
    return this.updateAboutUs.get('what_we_believe')!;
  }

  get our_commit(){
    return this.updateAboutUs.get('our_commit')
  }
  updateContact(){
    let formData = this.updateAboutUs.value;
    let f = new FormData();

    for (let x in formData){
      f.append(x, formData[x])
    }

    console.log(this.updateAboutUs.value)
    this.dataService.updateAboutUs(this.activatedRoute.snapshot.params?.['id'], f).subscribe( (results) => {
      alert('Contact Info has been updated')
      this.updateAboutUs.reset()
    }, (err) => {
      alert('Update Item Failed');
      console.log(err)
    })
  }
  loadData() {
    this.updateAboutUs.setValue({})
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from "../services/data.service";
import {Employee} from "../interfaces/employee";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  employees!:Employee[]
  employeeRegisterForm;
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.employeeRegisterForm = formBuilder.group({
      email: ['', [Validators.required]],
      password:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get email() {
    return this.employeeRegisterForm.get('name')!;
  }

  get password() {
    return this.employeeRegisterForm.get('description')!;
  }

register(){
    let formData = this.employeeRegisterForm.value;
    this.dataService.register(formData).subscribe((result)=> {
      alert('Registration Successful');
    }, (err) => {
      alert('Registration Failed');
      console.log(err);
    })

}
}

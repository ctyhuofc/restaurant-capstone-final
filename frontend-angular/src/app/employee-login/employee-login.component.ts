import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from "../services/data.service";
import {Employee} from "../interfaces/employee";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  employees!:Employee[]
  employeeLoginForm;
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.employeeLoginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password:['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get email() {
    return this.employeeLoginForm.get('email')!;
  }

  get password() {
    return this.employeeLoginForm.get('password')!;
  }

  login(){
    let formData = this.employeeLoginForm.value;
    this.dataService.login(formData).subscribe((result)=> {
      localStorage.setItem('currentEmployee', JSON.stringify(result));
      alert('Login Successful');
      this.router.navigate(['employees/home']);
    }, (err) => {
      alert('Login Failed');
      console.log(err);
    })
  }
}

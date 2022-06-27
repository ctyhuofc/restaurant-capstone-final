import { Component, OnInit } from '@angular/core';
import {AuthguardService} from "../services/authguard.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: boolean = false
employee(){
  if (this.authguardService.canActivate()){
  return true
}
return false
}
  constructor(private authguardService:AuthguardService) { }
  ngOnInit(): void {
  }

}

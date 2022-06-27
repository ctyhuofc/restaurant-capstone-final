import { Injectable } from '@angular/core';
import { CanActivate, Router} from "@angular/router";
import { DataService } from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private dataService:DataService, private router:Router) { }

  canActivate(): boolean {
    if(!this.dataService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true
  }
}

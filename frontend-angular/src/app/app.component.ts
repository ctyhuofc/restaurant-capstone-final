import { Component } from '@angular/core';
import { CanActivate, Router} from "@angular/router";
import { DataService } from './services/data.service'
import { AuthguardService} from "./services/authguard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'restaurant-capstone';

constructor(public dataService: DataService, public authGuardService:AuthguardService){}

}








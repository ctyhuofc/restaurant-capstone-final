import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
ionViewDidEnter(){
    setTimeout(()=>{
      this.modalController.dismiss();
    }, 3000)
}
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navCtrl: NavController) {}
public gotoFood(){
this.navCtrl.navigateForward('tabs/tab2')
}
public gotoDrinks(){
    this.navCtrl.navigateForward('tabs/tab3')
  }
  public gotoOffers(){
    this.navCtrl.navigateForward('tabs/tab4')
  }
}

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashPage } from './splash/splash.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalController: ModalController) {
    this.presentSplash();
  }
  async presentSplash(){
    const modal = await this.modalController.create({
      component: SplashPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}

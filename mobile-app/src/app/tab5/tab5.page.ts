import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {EmailComposer, EmailComposerOptions} from "@awesome-cordova-plugins/email-composer/ngx";

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private navCtrl:NavController, private emailComposer: EmailComposer) { }

  ngOnInit() {
  }
public gotoReviews(){
    this.navCtrl.navigateForward('tabs/reviews')
}
  public gotoReviewForm(){
    this.navCtrl.navigateForward('tabs/review-form')
  }
  public gotoContactForm(){
    this.navCtrl.navigateForward('tabs/contact-us')
  }

  public gotoAboutUs(){
    this.navCtrl.navigateForward('tabs/about-us')
  }

  async openEmail(){
  const email: EmailComposerOptions ={
    to:'mngr@thelancelet.com',
    cc: 'mgmt@thelancelet.com',
    subject: 'Customer Feedback',
    body: 'Tell us how you are feeling below:'
  };

  await this.emailComposer.open(email);
  }
}

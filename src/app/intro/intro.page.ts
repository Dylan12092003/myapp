import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor(private navCtrl: NavController, private router: Router) {}

  goToHome() {
    console.log("Go to home");
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
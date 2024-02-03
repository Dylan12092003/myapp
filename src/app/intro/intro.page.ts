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
    this.router.navigateByUrl('menu/home', { replaceUrl: true });
  }
  ionViewDidEnter () {
    console.log("ya entre y vi la intro")
  }
}
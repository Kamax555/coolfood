import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavigationBarPage } from '../navigation-bar/navigation-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

}

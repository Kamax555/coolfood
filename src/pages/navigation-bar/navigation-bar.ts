import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the NavigationBarPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation-bar',
  templateUrl: 'navigation-bar.html'
})
export class NavigationBarPage {

  whatNewRoot = 'WhatNewPage'
  popularRoot = 'PopularPage'
  localRoot = 'LocalPage'


  constructor(public navCtrl: NavController) {}

}

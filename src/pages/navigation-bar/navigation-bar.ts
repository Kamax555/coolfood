import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WhatNewPage} from '../what-new/what-new';
import { LocalPage } from '../local/local';
import { PopularPage }from '../popular/popular';

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

//  whatNewRoot = 'WhatNewPage'
//  popularRoot = 'PopularPage'
 // localRoot = 'LocalPage'


  constructor(public navCtrl: NavController) {}



loader(){
  console.log("navibar is loading ");
}

whatNewRoot = 'WhatNewPage';
popularRoot = 'PopularPage';
localRoot = 'LocalPage';

}

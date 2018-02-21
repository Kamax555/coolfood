import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { NavigationBarPage } from'../pages/navigation-bar/navigation-bar';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalPage } from '../pages/local/local';
import { WhatNewPage } from '../pages/what-new/what-new';
import { PopularPage } from '../pages/popular/popular';
import { WhatNewPageModule } from '../pages/what-new/what-new.module';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    NavigationBarPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement:'top',
    }),
    WhatNewPageModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    NavigationBarPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

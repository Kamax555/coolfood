import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatNewPage } from './what-new';

@NgModule({
  declarations: [
    WhatNewPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatNewPage),
  ],
})
export class WhatNewPageModule {}

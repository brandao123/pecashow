import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PistaoPage } from './pistao';

@NgModule({
  declarations: [
    PistaoPage,
  ],
  imports: [
    IonicPageModule.forChild(PistaoPage),
  ],
})
export class PistaoPageModule {}

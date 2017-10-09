import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWodPage } from './add-wod';

@NgModule({
  declarations: [
    AddWodPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWodPage),
  ],
})
export class AddWodPageModule {}

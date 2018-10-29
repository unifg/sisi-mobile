import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IrregularitiesCardPage } from './irregularities-card';

@NgModule({
  declarations: [
    IrregularitiesCardPage,
  ],
  imports: [
    IonicPageModule.forChild(IrregularitiesCardPage),
  ],
})
export class IrregularitiesCardPageModule {}

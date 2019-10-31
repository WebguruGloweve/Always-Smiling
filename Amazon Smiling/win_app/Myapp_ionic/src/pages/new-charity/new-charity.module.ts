import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCharityPage } from './new-charity';

@NgModule({
  declarations: [
    NewCharityPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCharityPage),
  ],
})
export class NewCharityPageModule {}

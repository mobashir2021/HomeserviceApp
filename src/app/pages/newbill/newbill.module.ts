import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewbillPageRoutingModule } from './newbill-routing.module';

import { NewbillPage } from './newbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewbillPageRoutingModule
  ],
  declarations: [NewbillPage]
})
export class NewbillPageModule {}
